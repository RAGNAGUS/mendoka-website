/** @type {import('tailwindcss').Config} */
// Colors follow the Mendoka brand sheet: Deep Navy, Bright Blue, Cyan Blue and White.
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#010a1a",
          900: "#020f26",
          800: "#041b3d",
          700: "#0a2a58",
          600: "#123a72",
        },
        brand: {
          blue: "#007ed6",
          cyan: "#00b4ff",
          ice: "#e8f4ff",
          mist: "#f4f8fd",
        },
        lantern: {
          amber: "#f2b84b",
          ember: "#e0743a",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
      },
      maxWidth: {
        site: "76rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,180,255,0.35), 0 18px 60px -12px rgba(0,126,214,0.55)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 60px -24px rgba(1,10,26,0.8)",
      },
      keyframes: {
        twinkle: { "0%,100%": { opacity: "0.55", transform: "scale(0.9) rotate(0deg)" }, "50%": { opacity: "1", transform: "scale(1.08) rotate(8deg)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        "fade-up": { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "none" } },
        draw: { from: { strokeDashoffset: "1" }, to: { strokeDashoffset: "0" } },
      },
      animation: {
        twinkle: "twinkle 3.2s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.2,0.8,0.2,1) both",
        draw: "draw 2.2s cubic-bezier(0.6,0,0.2,1) 0.2s both",
      },
    },
  },
  plugins: [],
};
