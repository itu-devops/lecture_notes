const createTitle = (data) => {
    const title = data[0].repoPath

    
    const div = d3.select("#titleDiv")
    const containerWidth = d3.select("#container").node().getBoundingClientRect().width * 0.75;
    const svg = div.append("svg").attr("width", containerWidth)

    const textElement = svg.append("text")
        .attr("class", "topTitleText")
        .attr("x", "2%") 
        .attr("y", "2%") 
        .style("dominant-baseline", "middle"); 


    const lineCount = wrapText(textElement, title, containerWidth, line_height_four)

    svg.attr("height", line_height_four + (line_height_four * lineCount))

}



