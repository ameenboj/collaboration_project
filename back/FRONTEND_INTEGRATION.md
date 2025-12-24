# Connecting the React frontend to this Laravel API

This document shows the minimal steps to connect the React app (Vite) in `../front/front/front` to this Laravel backend (this folder).

Summary of the changes done for you

-   Added a public API route: `GET /api/ping` returning JSON
-   Updated `config/cors.php` to allow typical React dev server origins (ports 3000 and 5173) and enabled credentials
-   Added a Vite env example and `src/api.js` + `src/components/Ping.jsx` to the React app as examples

Quick run instructions

-   Start Laravel (from this folder):

```powershell
cd c:\Users\amanb\Desktop\back\back
php artisan serve --port=8000
```

-   Start React (from the React project folder):

```powershell
cd c:\Users\amanb\Desktop\back\front\front\front
npm install        # (run once if not installed)
npm run dev        # Vite dev server (default port 5173)
```

Environment variables (Vite)

-   Vite requires variables prefixed with `VITE_`. Create `.env` or `.env.local` in the React project root (not committed) with:

```
VITE_API_URL=http://localhost:8000/api
```

-   Restart the Vite dev server after changing env variables.

CORS configuration (Laravel)

-   The project `config/cors.php` was updated to allow:
    -   `http://localhost:3000`, `http://127.0.0.1:3000`
    -   `http://localhost:5173`, `http://127.0.0.1:5173`
-   `supports_credentials` is set to `true` so the frontend can send cookies (useful when using session auth / Sanctum).

Notes on authentication

-   If you plan to use Laravel Sanctum with SPA authentication, follow Sanctum's docs and uncomment or include the `EnsureFrontendRequestsAreStateful` middleware in the `api` middleware group. You will also want `withCredentials: true` on your axios requests and the frontend origin whitelisted in CORS.

React example usage

-   `src/api.js` (axios instance) was added to the React app. Example:

```js
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: { Accept: "application/json" },
});

export default api;
```

-   `src/components/Ping.jsx` demonstrates both `axios` (via `api`) and `fetch` usage to call `/ping`.

Testing the connection

-   With Laravel running on `http://127.0.0.1:8000` and Vite on `http://127.0.0.1:5173`:

1. Open the React app in the browser and navigate to the `Ping` view (a `Ping` component was added to `App.jsx` under the view name `ping`). It will show the JSON returned by the backend.

2. Use curl from the machine to test the API directly:

```powershell
curl http://127.0.0.1:8000/api/ping
```

3. Use browser to visit `http://127.0.0.1:8000/api/ping` — it should return JSON.

Troubleshooting

-   If you get a CORS error in the browser console:

    -   Confirm the frontend origin matches one of the allowed origins in `config/cors.php`.
    -   Confirm the frontend is hitting the correct API URL (check `VITE_API_URL`).
    -   If using cookies/sessions, ensure `withCredentials: true` (axios) or `credentials: 'include'` (fetch) and `supports_credentials` is true in `config/cors.php`.

-   If you changed `config/cors.php`, clear config cache (if used):

```powershell
php artisan config:clear
php artisan cache:clear
```

Next steps (optional)

-   If you want authenticated SPA requests with Sanctum, I can: add example login/logout endpoints, wire up Sanctum middleware, and add a small React auth helper using `api` to handle CSRF and cookie-based sessions.
