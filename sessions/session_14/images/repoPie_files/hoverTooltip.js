const createHoverTooltip = (svg) => {
  const toolTip = svg
    .append("g")
    .attr("class", "hoverTooltip")

  toolTip
    .append("rect")
    .attr("class", "hoverTooltipBox")
    .attr("rx", 5) 
    .attr("ry", 5)

  toolTip
    .append("text")
    .attr("class", "hoverTooltipText")
    .attr("y", hover_tooltip_padding)
    .attr("x", hover_tooltip_padding)
    .style("dominant-baseline", "hanging"); 
};

function showTooltipOnHover({e, data, svg}) {
  const toolTip = d3.select(".hoverTooltip");
  const [x, y] = d3.pointer(e, svg.node());

  const element = d3.select(".hoverTooltipText");

  var lineNumber = wrapText(
    element,
    data.fileName,
    hover_tooltip_max_width,
    line_height_two
  )

  // add y-value to last line of tooltip
  lineNumber++
  const startY = parseFloat(element.attr("y"))
  const startX = parseFloat(element.attr("x"))

  element.append("tspan")
    .attr("x", startX)
    .attr("y", startY + line_height_two * lineNumber) 
    .attr("class", "hoverTooltipYAxis")
    .style("dominant-baseline", "hanging")
    .attr("class", "hoverTooltipYAxis")
    .text(`Total ${data.yAxisMetric}: ${data.yAxis}`)

  d3.select(".hoverTooltipBox")
    .attr("width", hover_tooltip_width)
    .attr("height", hover_tooltip_height)

  adjustHoverTooltipSize(lineNumber, element)

  const actualWidth = parseFloat(d3.select(".hoverTooltipBox").attr("width"))
  const actualHeight = parseFloat(d3.select(".hoverTooltipBox").attr("height"))

  toolTip
    .attr(
      "transform",
      `translate(${calculateTooltipX(x, actualWidth)}, ${calculateTooltipY(
        y,
        actualHeight
      )})`
    )
    .style("visibility", "visible")
    .raise()
    .transition()
    .duration(200)
    .style("opacity", 1);
}

d3.select(document).on("click", (e) => {
  d3.select(".hoverTooltip").style("visibility", "hidden").style("opacity", 0);
});

function adjustHoverTooltipSize(lineNumber, textElement) {
  var maxTspan = 0;
  textElement.selectAll("tspan").each(function () {
    const length = this.getComputedTextLength();
    if (length > maxTspan) {
      maxTspan = length;
    }
  });

  d3.select(".hoverTooltipBox")
    .attr("height", hover_tooltip_height + lineNumber * line_height_two)
    .attr("width", maxTspan + hover_tooltip_padding * 2);
}
