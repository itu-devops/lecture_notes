d3.json("/metadata").then(metadata => {

    d3.csv("/data.csv", d3.autoType).then(data => {
        const select = d3.select("#selectDiv")
                        .append("select")
                        .attr("class", "selectMenu")
                        .on("change", onChange)

        const primaryGroup = d3.group(data, d => d.repoPath)

        select.append("option")
            .attr("disabled", true)
            .attr("selected", true)
            .attr("value", "")
            .text("Select repo")

        const keys = [...primaryGroup.keys()]
        keys.forEach(element => {
            select.append("option")
                .text(element)
        })

        const firstData = primaryGroup.get(primaryGroup.keys().next().value)
        callDiv(firstData)

        function onChange() {
            const value = select.property("value")

            // Ignore placeholder selection
            if (value === "") return

            cleanUp()

            const selectedData = primaryGroup.get(value)

            callDiv(selectedData)

        }

        window.addEventListener("resize", onChange)

    })

    function callDiv(data) {
        reCalculateSizes()
        createTitle(data)
        drawGraph(data, metadata)
        createLegend(data)

    }

})

function cleanUp() {
    d3.select("#titleDiv").html(null)
    d3.select("#graphDiv").html(null)
    d3.select("#legendDiv").html(null)
}


















