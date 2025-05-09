const drawGraph = (data, metadata) => {
    var globalyMin = Infinity
    var globalyMax= -Infinity

    var globalNodeMin = Infinity
    var globalNodeMax= -Infinity

    var maxNumberOfFiles = 0

    const div = d3.select("#graphDiv")
    const svg = div
        .append("svg")
        .attr("class", "graphSVG")

    createClickTooltip(svg, metadata)
    createHoverTooltip(svg)

    const createGraph = () => {
        const primaryGroup = d3.rollup(data,
            (D) => new Map([
                ["yAxis", d3.sum(D, d => d.yAxis)],
                ["nodeSize", d3.sum(D, d => d.nodeSize)],
                ["linesAdded", d3.sum(D, d => d.linesAdded)],
                ["linesDeleted", d3.sum(D, d => d.linesDeleted)],
            ]),
            (w) => formatISOWeek(w.date),
            (d) => d.fileName,
            (d) => d.author)

        var nodes = []
        var uniqueAuthors = new Set([])

        primaryGroup.forEach((fileMap, yearWeek) => {

            const topFiles = getTopFiles(fileMap, metadata.numberOfFiles)

            if(maxNumberOfFiles < topFiles.length) {
                maxNumberOfFiles = topFiles.length
            }

            updateGlobalMinMax(topFiles)

            for (let i = 0; i < topFiles.length; i++) { // for loop for each file in a week
                const fileName = topFiles[i].fileName
                const authorMap = fileMap.get(fileName)


                var arrAuthorMap = [...authorMap.keys()].forEach(item => uniqueAuthors.add(item))

                nodes.push({
                    x: 0,
                    y: 0,
                    yearWeek: yearWeek,
                    fileName: fileName,
                    authorMap: authorMap,
                    nodeSize: topFiles[i].totalNodeSize,
                    yAxis: topFiles[i].totalyAxis,
                    yAxisMetric: metadata.yAxis
                })

            }

        })

        defineScales({
                data,
                globalyMax,
                globalyMin,
                globalNodeMax,
                authors: Array.from(uniqueAuthors).sort(d3.ascending),
                maxNumberOfFiles
            })

        //Sets the width of the graph to be as wide as the container(from chat)
        const containerWidth = div.node().getBoundingClientRect().width;

        svg.attr("viewBox", `0 0 ${containerWidth} ${graph_height + margin.bottom + line_height_two * 2}`)

        removeGraph(svg)

        // x-axis
        buildXAxis(svg)

        // y-axis
        buildYAxis(svg, metadata, globalyMin, globalyMax)


        // Chapter 12, Helge book.
        const simulation = createSimulation(nodes)

        for (let i = 0; i < 300; i++) {
            simulation.tick()

        }

        nodes.forEach(d => {

            buildPie(d,svg)})

    }

    const updateGlobalMinMax = (topFiles) => {
        const yAxisMin = d3.min(topFiles, d => d.totalyAxis)
        const yAxisMax = d3.max(topFiles, d => d.totalyAxis)
        const nodeSizeMin = d3.min(topFiles, d => d.totalNodeSize)
        const nodeSizeMax = d3.max(topFiles, d => d.totalNodeSize)


        if (yAxisMin < globalyMin) {
            globalyMin = yAxisMin;
        }
        if (yAxisMax > globalyMax) {
            globalyMax = yAxisMax;
        }

        if (nodeSizeMin < globalNodeMin) {
            globalNodeMin = nodeSizeMin;
        }
        if (nodeSizeMax > globalNodeMax) {
            globalNodeMax = nodeSizeMax;
        }
    }

    createGraph()
}

function getTopFiles(fileMap, numberOfFiles) {
    const fileArray = Array.from(fileMap, ([fileName, authorMap]) => {
        const totalNodeSize = d3.sum([...authorMap.values()].map(x => x.get("nodeSize")))
        const totalyAxis = d3.sum([...authorMap.values()].map(x => x.get("yAxis")))
        return { fileName, totalyAxis, totalNodeSize };

    })

    fileArray.sort((a, b) => b.totalyAxis - a.totalyAxis)
    return fileArray.slice(0, numberOfFiles);
}

function removeGraph(svg) {
    svg.selectAll(".bottomAxis").remove()
    svg.selectAll(".leftAxis").remove()
    svg.selectAll(".xAxisBackground").remove()
    svg.selectAll(".xAxisLabel").remove()
    svg.selectAll(".yAxisLabel").remove()

}

function buildXAxis(svg) {
    const bottomAxis = d3.axisBottom(xScale)
            .tickSize(10)
            .tickPadding(5)
            .tickSizeOuter(0)
            .tickFormat(d => d.split("-")[1]);

    const xAxisBackground = svg.append("g")
        .attr("class", "xAxisBackground");

        xAxisBackground.selectAll("rect")
            .data(xScale.domain())
            .enter()
            .append("rect")
            .attr("x", d => xScale(d) + margin.left)
            .attr("y", 0)
            .attr("width", xScale.bandwidth())
            .attr("height", graph_height)
            .attr("fill", (d, i) => i % 2 === 0 ? backgroundColor1 : backgroundColor2)


        // Append x-axis
        const bottomAxisGroup = svg.append("g")
            .attr("class", "bottomAxis")
            .attr("transform", `translate(${margin.left},${graph_height})`)
            .call(bottomAxis)

    // x-axis label
    svg.append("text")
        .attr("class", "xAxisLabel")
        .attr("x", margin.left + width / 2)
        .attr("y", graph_height + bottomAxisGroup.node().getBBox().height + margin.bottom * 0.5)
        .text("Weeks")

}

function buildYAxis(svg, metadata, globalyMin, globalyMax) {
    const leftAxis = d3.axisLeft(yScale)
            /*.tickValues(yScale.ticks().filter(tick => {
                const logBase = yScale.base() === 2 ? Math.log2(tick) : Math.log10(tick)

                return tick === 1 || Number.isInteger(logBase)
            }))*/
            .tickValues(getLogTicks(globalyMin, globalyMax))
            .tickSize(-width)
            .tickSizeOuter(0)
            .tickPadding(20)

        svg.append("g")
            .attr("class", "leftAxis")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(leftAxis)
            .selectAll(".tick line")

        svg.append("text")
            .attr("class", "yAxisLabel")
            .attr("transform", `translate(${margin.left * 0.25}, ${graph_height * 0.5}) rotate(-90)`)
            .text(String(metadata.yAxis).charAt(0).toUpperCase() + String(metadata.yAxis).slice(1))


}

function createSimulation(nodes) {
    const sim = d3.forceSimulation(nodes)
        .force("x", d3.forceX(d => xScale(d.yearWeek) + xScale.bandwidth() / 2).strength(0.5))
        .force("y", d3.forceY(d =>  yScale(d.yAxis)).strength(1))
        .force("boundary", forceBoundary(
            (d) => xScale(d.yearWeek) + rScale(d.nodeSize) + graph_bandwidth_padding,  // Min X boundary
            (d) => 0 + rScale(d.nodeSize) + graph_bandwidth_padding,  // Min Y (top)
            (d) => xScale(d.yearWeek) + xScale.bandwidth() - rScale(d.nodeSize) - graph_bandwidth_padding,  // Max X boundary
            (d) => graph_height - rScale(d.nodeSize) - graph_bandwidth_padding))  // Max Y (bottom)
        .force("collide", d3.forceCollide().radius(d => rScale(d.nodeSize)))

    return sim
}

function getLogTicks(min, max) {
    var ticks = []
    const base = yScale.base()

    var value = 1
    while (value <= max) {
        if (value >= min) ticks.push(value)
        value *= base
    }

    if (ticks.length == 0){
        ticks.push(min)
    }

    return ticks
}

