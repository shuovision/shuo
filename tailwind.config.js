module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        // 注入碩果工作室的專屬配色
        background: "#0F0F0F", // 深邃極致黑
        primary: "#D4AF37",    // 經典高級金
        secondary: "#1A1A1A",  // 略淺的黑色（可用於卡片或背景層次）
        accent: "#F5E6BE",     // 淺金色（用於細微的打亮或點綴）
      },
      backgroundImage: {
        // 額外加贈一個金屬質感漸層，可以用在按鈕上
        "gold-gradient": "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
      },
    },
  },
  plugins: [],
};
