var width
var height
var margin
var graph_radius
var donutHole = 0.0
var graph_height
var graph_bandwidth_padding 
var line_height_two
var line_height_three
var line_height_four


const min_width = 700

//Graph
const max_graph_height = 550
const min_graph_height = 300

//Legend
var legendPadding

//ClickTooltip
var tooltip_padding
var tooltip_width
var tooltip_height
var tooltip_max_width
var toolTip_radius

//HoverTooltip
var hover_tooltip_width
var hover_tooltip_height
var hover_tooltip_max_width
var hover_tooltip_padding


const reCalculateSizes = () => {

    //Graph
    height = window.innerHeight * 0.8
    width = Math.max(min_width, window.innerWidth * 0.9)

    margin = { top: width*0.005, right: 0, bottom: width*0.035, left: width * 0.07 }
    graph_height = Math.max(min_graph_height, Math.min(max_graph_height, height)) //- margin.top - margin.bottom
    graph_radius = Math.min(width, graph_height) / 22
    graph_bandwidth_padding = graph_radius * 0.15
 
    line_height_four = Math.min(window.innerHeight, window.innerWidth) * 0.04

    //Legend
    legendPadding = window.innerWidth * 0.045

    //ToolTip
    line_height_three = Math.min(window.innerHeight, window.innerWidth) * 0.03
    tooltip_width = width * 0.5
    tooltip_height = tooltip_width * 0.6
    tooltip_padding = tooltip_width * 0.02
    tooltip_max_width = tooltip_width - tooltip_padding * 2
    toolTip_radius = tooltip_height * 0.25

    //hover tooltip
    hover_tooltip_width = width * 0.25
    hover_tooltip_padding = hover_tooltip_width * 0.02
    hover_tooltip_max_width = hover_tooltip_width - hover_tooltip_padding * 2
    line_height_two = Math.min(window.innerHeight, window.innerWidth) * 0.02
    hover_tooltip_height = line_height_two + hover_tooltip_padding 
    


}

function calculateTooltipX(x, tooltipWidth) {
    if ((tooltipWidth + x) > width + margin.left){
        return x - tooltipWidth - tooltip_padding
    } else {
        return x + tooltip_padding
    }
    

}

function calculateTooltipY(y, tooltipHeight) {
    const overflow = tooltipHeight + y - graph_height + graph_radius
    if (overflow > 0) {
        return y - overflow - tooltip_padding
    }
    return y + tooltip_padding
}


function wrapText(textElement, text, maxWidth, lineHeight) {
    textElement.text("") 
    
    var segments = text.split("/"); 
    var currentLine = ""
    var lineNumber = 0
    var start_x = parseFloat(textElement.attr("x"))
    var start_y = parseFloat(textElement.attr("y"))

    segments.forEach((segment) => {
        var newLine = currentLine ? currentLine + "/" + segment : segment

        var tempText = textElement.append("tspan").text(newLine)
        var textWidth = tempText.node().getComputedTextLength()
        tempText.remove() 
        if (textWidth > maxWidth) {
            if (currentLine) {
                textElement.append("tspan")
                    .attr("x", start_x)
                    .attr("y", start_y + lineHeight * lineNumber)
                    .attr("text-anchor", "start")
                    .style("dominant-baseline", "hanging")
                    .text(currentLine)
                lineNumber++;
            }
            currentLine = "/" + segment; 
        } else {
            currentLine = newLine; 
        }
    })

    textElement.append("tspan")
        .attr("x", start_x) 
        .attr("y", start_y + lineHeight * lineNumber)
        .attr("text-anchor", "start")
        .style("dominant-baseline", "hanging")
        .text(currentLine)

    return lineNumber

}
