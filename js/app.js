import { NetworkMonitor  } from "./core/monitor.js";
import { graph } from './ui/charts.js';

const monitor = new NetworkMonitor();
const myGraph = graph();


async function updateDashboard() {
    // Get Data
    const latency = await monitor.getLatency();
    const infoNetwork = await monitor.getNetworkData();
    const stability = await monitor.getStability();

    // Update Dashboard
    document.getElementById('latency-val').innerText = latency;
    document.getElementById('stability-val').innerText = stability;
    document.getElementById('speed-val').innerText = infoNetwork.speed;

    // Graph
    const data = myGraph.w.config.series[0].data;
    data.push(latency);
    if(data.length > 20) data.shift();

    // Update New Data
    myGraph.updateSeries([{ data: data }]);
}


// Repeat Every Second
setInterval(updateDashboard, 1000);