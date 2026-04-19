# Protofolio

This repository contains a personal portfolio built with React + TypeScript + Vite.

Project layout

- `frontend/` — Vite + React + TypeScript frontend. Main entry is `frontend/src/main.tsx` and the app is in `frontend/src`.

Quick start (frontend)

1. Open a terminal in the project root.
2. Install dependencies and run dev server:

```powershell
cd frontend
npm install
npm run dev
```

3. Open the URL shown by Vite (typically `http://localhost:5173`).

Build for production

```powershell
cd frontend
npm run build
```

EmailJS contact form setup

1. Create a local env file from the example:

```powershell
cd frontend
Copy-Item .env.example .env.local
```

2. Fill in EmailJS values in `.env.local`:
	- `VITE_EMAILJS_SERVICE_ID`
	- `VITE_EMAILJS_TEMPLATE_ID`
	- `VITE_EMAILJS_PUBLIC_KEY`

3. Configure your EmailJS template variables to match the contact form payload:
	- `from_name`
	- `from_email`
	- `reply_to`
	- `message`
	- `to_email`
