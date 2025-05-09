// Chapter 3, Helge book.
const yScale = d3.scaleLog()
const xScale = d3.scaleBand()
const rScale = d3.scaleSqrt() // Helge bog chapter 7

const colorScale = d3.scaleOrdinal([

    "#006d77", // Current
    "#ba274a", // Rose red
    "#AEBF89", // Yellow green
    "#8da0cb", // Blue
    "#e89ff0", // Light purple
    "#d98b19", // Mustard
    "#ffa69e", // Melon
    "#473c85", // Dark blue
    "#fde12d", // School bus yellow
    "#628b35", // Avocado
    "#e96a38", // Coral
    

    /*"#006D77", // Current 
    "#BA274A", // Rose Red 
    "#628B35", // Avocado 
    "#D98B19", // Mustard 
    "#FFA69E", // Melon 
    "#8DA0CB", // Blue 
    "#FDE12D", // School bus yellow 
    "#853570", // Violet Dark 
    "#7EBDC3", // Blue 
    "#46351D", // Shit brown 
    "#3DA5D9", // Blue 
    "#E96A38", // Coral*/
])

const backgroundColor1 = "#FFFFFF" // White
const backgroundColor2 = "#D3D3D3" // Gray

const formatISOWeek = d3.utcFormat("%G-%V") // e.g. "2025-15"


const defineScales = ({data, globalyMax, globalyMin, globalNodeMax, authors, maxNumberOfFiles}) => {

    // Find weeks for xScale
    // source: ChatGPT 
    const minDate = d3.min(data, d => d.date)
    const maxDate = d3.max(data, d => d.date)

    
    const yearWeeks = []
    var current = d3.utcMonday(minDate) 
    const end = d3.utcMonday(maxDate)


    while (current <= end) {
        yearWeeks.push(formatISOWeek(current))
        current = d3.utcMonday.offset(current, 1) 
    }


    xScale
        .domain(yearWeeks) 
        .range([0, width]) 

    yScale
        .domain([Math.max(1, globalyMin) / 1.5, globalyMax * 1.5]) 
        .range([graph_height, margin.top])
        .base(globalyMax > 100 ? 10 : 2)


    const radiusMax = maxNumberOfFiles > 10 ? d3.min([xScale.bandwidth() / 4, graph_radius]) : graph_radius

    rScale
        .domain([0, globalNodeMax])
        .range([radiusMax * 0.50, radiusMax])//.base(10) 
    
    colorScale
        .domain(authors)

}



