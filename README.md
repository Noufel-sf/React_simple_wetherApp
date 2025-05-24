# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


for the style i used tailwind css 



✅ 1. React Basics & State Management
Used useState to manage dynamic data like user input and API responses.

Practiced two-way data binding between input fields and component state.

✅ 2. Handling API Requests
Integrated OpenWeatherMap API to fetch real-time weather data.

Used Axios and async/await to make asynchronous HTTP requests.

Learned to construct dynamic URLs using template literals based on user input.

✅ 3. Conditional Rendering
Used logical && expressions to render components only when data is available.

Prevented errors by checking if data (e.g., data.name, data.main) exists before rendering.

✅ 4. Error Handling
Added try...catch blocks to handle network errors and display alerts for invalid city names.

✅ 5. Input Handling & Events
Managed user input with onChange and triggered API calls with onKeyPress (Enter key).

✅ 6. Clean UI with Tailwind CSS
Applied responsive and visually appealing designs using Tailwind CSS utility classes.

Learned to create a gradient background, rounded borders, and padding with Tailwind.
