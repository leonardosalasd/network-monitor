export function graph() {
    // Config
    const options = {
        chart: {
            type: 'line',
            height: 300,
            toolbar: { show: false }
        },
        series: [{
            name: 'Latencia',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
        colors: ['#8A0100'], 
        stroke: { curve: 'smooth' },
        theme: { mode: 'dark' }
    };

    // Draw in the container
    const graph = new ApexCharts(document.querySelector("#chart"), options);
    
    // Draw
    graph.render();

    return graph; // Returns the object
}