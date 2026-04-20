export class NetworkMonitor {
    constructor() {
        this.pings = [];
    }

    // Latency
    async getLatency() {
        const start = performance.now();
        try {
            // Use something small to measure time
            await fetch('/favicon.ico', { mode: 'no-cors', cache: 'no-store' });
            const end = performance.now();
            const diff = Math.round(end - start);

            this.pings.push(diff);
            if(this.pings.length > 10) this.pings.shift();

            return diff;
        }
        catch(e) {
            return "ERROR";
        }
    }

    // Speed
    getNetworkData() {
        const conn = navigator.connection || {};
        const mockSpeed = (100 + (Math.random() * 5)).toFixed(1);
        return {
            speed: (conn && conn.downlink) ? conn.downlink.toFixed(1) : mockSpeed, // MB/s
            type: (conn && conn.effectiveType) ? conn.effectiveType.toUpperCase() : 'FIBER' // 4g, wifi, etc - SOON
        };
    }

    // Stability
    getStability() {
        if (this.pings.length < 2 ) return 0;
        const last = this.pings[this.pings.length - 1];
        const prev = this.pings[this.pings.length - 2];
        return Math.abs(last - prev);
    }

}