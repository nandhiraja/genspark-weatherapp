# Weather Forecast Dashboard

A modern Angular weather dashboard that fetches and displays live weather forecast data from a REST API, automatically deployed to **GitHub Pages** via **GitHub Actions CI/CD**.

---

## 📋 Project Description

This application provides a clean, responsive weather dashboard that:
- Fetches weather forecasts from an Azure-hosted REST API
- Displays forecast data (date, temperature in °C/°F, summary) in a styled table
- Handles loading and error states gracefully
- Highlights rows where temperature exceeds 30°C
- Shows the total number of forecast records
- Includes a **Refresh** button to reload live data

---

##  Angular Version

| Package | Version |
|---------|---------|
| Angular | 21.x    |
| Angular CLI | 21.x |
| Node.js | 20.x (recommended) |
| TypeScript | 5.9.x |

---

## Installation Steps

### Prerequisites
- Node.js v20+
- npm v11+

### Clone & Run Locally

```bash
# Clone the repository
git clone https://github.com/<your-username>/GithubCICD.git
cd GithubCICD/WeatherApp

# Install dependencies
npm install

# Run development server
npm start
```

Open your browser at [http://localhost:4200](http://localhost:4200)

### Build for Production

```bash
npm run build
```

Output will be in `dist/WeatherApp/browser/`.

---

## 🌐 Deployment URL

The application is automatically deployed to GitHub Pages on every push to `main`:

**➡️ https://&lt;your-github-username&gt;.github.io/GithubCICD/**

> Replace `<your-github-username>` with your actual GitHub username.

---

## 🏗️ Project Structure

```
WeatherApp/
├── src/
│   ├── app/
│   │   ├── weather/
│   │   │   ├── weather.ts        # Weather component
│   │   │   ├── weather.html      # Component template
│   │   │   └── weather.css       # Component styles
│   │   ├── weather.service.ts    # HttpClient service
│   │   ├── app.ts                # Root component
│   │   ├── app.config.ts         # App bootstrap config
│   │   └── app.routes.ts         # Routing
│   ├── styles.css                # Global styles
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions CI/CD
└── README.md
```

---

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on **push to `main`** and:

1. ✅ Checks out the code
2. ✅ Sets up Node.js 20
3. ✅ Installs npm dependencies
4. ✅ Builds the Angular app with `--base-href`
5. ✅ Deploys to GitHub Pages

---

##  Features

- **Bonus 1** — Displays total forecast record count
- **Bonus 2** — Highlights rows where TemperatureC > 30 in orange
- **Bonus 3** — Refresh button to reload weather data
- Fully responsive (mobile + desktop)
- Dark glassmorphism design
- Loading spinner and user-friendly error state

