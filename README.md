# Tushar Kumar — Personal Portfolio

A responsive React portfolio built with Vite, CSS, and Lucide icons. It includes a mobile navigation menu, dark/light theme toggle, project cards, education, experience/research, and a front-end-only contact form.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

1. Extract this folder.
2. Open a terminal inside `tushar-portfolio`.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

To test a production build:

```bash
npm run build
npm run preview
```

## Personalize before publishing

Edit `src/data.js`:
- Replace `your.email@example.com` with the email address you want public.
- Replace the GitHub and LinkedIn placeholder URLs.
- Replace each project `github` and `demo` value of `#` with real URLs.

Edit `src/App.jsx`:
- Add your verified internship role and dates.
- Replace `[Expected year]` and `[Add current CGPA]`.
- Keep the research description accurate to the work you have actually completed.

## Contact form note

The form currently validates fields in the browser and displays a notice explaining that it does not send messages. To receive submissions, connect a form provider or build a backend, then update `src/components/ContactForm.jsx`.

## Tech stack

- React functional components and hooks
- Vite
- CSS with responsive breakpoints and light/dark theme variables
- Lucide React icons

No backend is required to run this portfolio.
