// import "../styles/style.css"

// import * as d3 from 'd3';

d3.json("../data.json").then(d => {
    makeChart(d)
    console.log(d)
})

function makeChart(data) {
    
    const margin = 150;
    const width = 1150 - 1 * margin;
    const height = 750 - 2 * margin;

    const svg = d3.select('.barchart');

    const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`)
        .attr('id', 'container')

    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .attr('id', 'xScale')

    const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0,1200000000])

        chart.append('g')
        .call(d3.axisLeft(yScale))

    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(data.map((d) => d.title))
        .padding(0.50)

    chart.select('#xScale')
        .call(d3.axisBottom(xScale))

    chart.selectAll('rect')
        .data(data)
        .join('rect')
        .attr('x', (d) => xScale(d.title))
        .attr('y', (d) => yScale(d.streams))
        .attr('height', (d) => height - yScale(d.streams))
        .attr('width', xScale.bandwidth())
        .style('overflow', 'visible')
        .attr('fill', '#f19a30')
            .on("mouseover touchstart", (e, d) =>
            d3
                .select("#tooltip")
                .transition()
                .duration(300)
                .style("opacity", 1)
                .text(`${d.streams} streams`)
                )
            .on("mousemove", (e) =>
                d3
                    .select("#tooltip")
                    .style("left", e.pageX + 15 + "px")
                    .style("top", e.pageY + 15 + "px")
                    )
            .on("mouseout", e => d3.select("#tooltip").style("opacity", 0)
                    );


    svg.append('text')
        .attr('x', -(height / 2) - margin)
        .attr('y', margin / 10)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text('Streams')
        .attr('fill', 'white')
        .attr('class', 'labels')

        svg.append('text')
        .attr('x', width / 2 + margin)
        .attr('y', 660)
        .attr('text-anchor', 'middle')
        .text('Songs')
        .attr('fill', 'white')
        .attr('class', 'labels')
}