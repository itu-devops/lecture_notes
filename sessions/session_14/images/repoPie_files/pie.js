const buildPie = (node, svg) => {

    const {x, y, yearWeek, fileName, authorMap, nodeSize, yAxis, yAxisMetric} = node

    const leftAxisGroup = svg.select(".leftAxis")

    const singleDonut = leftAxisGroup.append("g")
        .attr("transform", `translate(${x}, ${y})`)
        .attr("class", "singleDonut")
        .on("click", (e, d) => {

            showTooltipOnClick(
                {e, 
                data: {
                    fileName: fileName, 
                    authorMap: authorMap,
                    nodeSize: nodeSize
                },
                svg})
            singleDonut.style("opacity", 0.5)
            d3.select(".hoverTooltip").style("visibility", "hidden")

        })
        .on("mouseover", (e, d) => {
            if (d3.select(".clickTooltip").style("visibility") !== "visible"){
                showTooltipOnHover({
                    e, 
                    data: {
                        fileName: fileName,
                        yAxis: yAxis, 
                        yAxisMetric: yAxisMetric
                    }, 
                    svg
                })
                singleDonut.style("opacity", 0.5)
            }

        })
        .on("mouseout", (e, d) => {
            if (d3.select(".clickTooltip").style("visibility") !== "visible"){
                d3.select(".hoverTooltip").style("visibility", "hidden")
                singleDonut.style("opacity", 1)
            }
            
        })

    var pie = d3.pie().sort(null).value(([key, value]) => value.get("nodeSize"))

    const preparedPie = pie(authorMap)

    const drawPie = () => {
        var arcGen = d3.arc()
            .innerRadius(donutHole)
            .outerRadius(rScale(nodeSize))

        var arcs = singleDonut.selectAll()
        .data(preparedPie)
        .join("g")
        .attr("class", "pie-arc")

        arcs.selectAll("path").remove()

        arcs.append("path")
        .attr("d", arcGen)
        .attr("fill", d => colorScale(d.data[0]))
    }

    drawPie()

}


