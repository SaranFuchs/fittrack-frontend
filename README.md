# FitTrack Coach frontend

Responsive React/Vite interface for trainers and clients. It uses React Router,
native `fetch`, React context for authentication, CSS Modules, and the FitTrack
global visual system.

## Local setup

Start the backend first, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The API defaults to
`http://localhost:3000/api`; copy `.env.example` to `.env` only when you need a
different URL.

## Seeded demo accounts

Run `npm run seed` in `../backend` before signing in.

| Role | Email | Password |
|---|---|---|
| Trainer | `demo.trainer@fittrack.local` | `FitTrackDemo!2026` |
| Client | `alex.client@fittrack.local` | `ClientDemo!2026` |
| Client | `jamie.client@fittrack.local` | `ClientDemo!2026` |

## Checks

```bash
npm run lint
npm run build
```
