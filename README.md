# Production Shift Analyzer

A local-first shift reporting tool for manufacturing teams.

Production Shift Analyzer turns the numbers already collected at the end of a shift into a compact operational view. Enter gross and net production, die activity and downtime events; the application derives scrap, operating time, hourly output, downtime rate and estimated production lost during downtime.

## What it does

- Records day and night shifts by production line
- Captures gross production, net production, die changes and faulty dies
- Supports multiple downtime events with configurable reasons
- Calculates production metrics as values are entered
- Estimates downtime loss in kilograms using the observed gross production rate
- Keeps a local shift history with no account or backend required
- Lets you configure shift duration, production lines and downtime reasons
- Works on desktop and mobile

## Calculations

The application deliberately avoids a generic efficiency score. A meaningful efficiency figure needs a rated speed, target output or another defensible standard.

```text
scrap              = gross production - net production
scrap rate         = scrap / gross production
operating time     = shift duration - downtime
gross output/hour  = gross production / operating hours
net output/hour    = net production / operating hours
downtime rate      = downtime / shift duration
die failure rate   = faulty dies / die changes
```

Estimated downtime loss is calculated as:

```text
observed gross rate × downtime hours
```

It is an estimate based on the shift's observed running rate, not the rated capacity of the machine.

## Run locally

Requires a current Node.js LTS release.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm start
```

## Data and privacy

Shift records and application settings are stored in the browser with `localStorage`. The current version does not send production data to a server and has no authentication or database dependency. Clearing site data will remove locally stored records.

## Stack

- Next.js
- React
- TypeScript
- CSS
- Lucide icons

## Scope

This repository is intentionally small. It focuses on fast shift entry and useful derived metrics rather than trying to become a full MES. CSV/Excel exchange, target-based performance metrics and database-backed deployments are natural extensions, but are outside the current release.

## License

MIT
