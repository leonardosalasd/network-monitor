# Network Monitor

A browser-based network monitoring dashboard built with Vanilla JavaScript and Tailwind CSS. It presents the key state of a connection in a compact interface with:

- Latency
- Stability
- Speed
- A chart area powered by ApexCharts
- A responsive layout and custom styling

## What it does

The page is designed to visualize network status in real time through a simple dashboard layout. The current interface includes:

- A sticky header with project title and author link
- Three metric cards for latency, stability, and speed
- A chart container for visualizing network data
- Custom branding, colors, and typography through Tailwind

## Requirements

Before installing or running the project, make sure you have:

- Node.js 18 or newer
- pnpm 10 or newer

## Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Build the Tailwind stylesheet during development:

   ```bash
   pnpm dev
   ```

3. Open the app with a local server or Live Server extension.

   The page uses ES modules, so opening `index.html` directly with `file://` may break script loading in some browsers.

## Build

Generate the production CSS file with:

```bash
pnpm build
```

This compiles `src/input.css` into `css/style.css`.

## Project Structure

```text
network-monitor/
├── assets/
├── css/
│   └── style.css
├── favicon.ico
├── index.html
├── js/
│   ├── app.js
│   ├── core/
│   │   └── monitor.js
│   ├── ui/
│   │   └── charts.js
│   └── vendor/
│       └── apexcharts.min.js
├── package.json
├── pnpm-lock.yaml
├── src/
│   └── input.css
└── tailwind.config.js
```

## Scripts

- `pnpm dev` - Watch Tailwind and rebuild `css/style.css` on changes.
- `pnpm build` - Create a minified production build of the Tailwind stylesheet.

## Dependencies

- `tailwindcss` for utility-based styling
- `apexcharts` for chart rendering

## Notes

- The favicon is loaded from `favicon.ico` in the project root.
- The stylesheet loaded by the page is `css/style.css`.
- The app entry point is `js/app.js`.

---

[Created by Leonardo Salas.] (https://github.com/leonardosalasd)
