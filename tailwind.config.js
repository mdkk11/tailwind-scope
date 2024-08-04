import scopedPreflightStyles from "./plugin/scopedPreflightStyles";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles({
      scope: ".tailwind-scope",
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
