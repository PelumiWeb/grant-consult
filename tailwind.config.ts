import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
        mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem))",
    },
     backgroundImage: {
        'hero': "url('/hero.png')",
        'footer': "url('/footerImage.svg')",
        "subscription": "url('/subscription.svg')",
        'linearGradient': 'linear-gradient(180deg, #FD32B2 0%, #F2D4E7 100%)',
      },
    extend: {
       boxShadow: {
        'custom-green': '0px 4px 35px 0px #05482440',
        'card': '0px 4px 15px -5px rgba(0, 0, 0, 0.5)',
        'grant-card': '0px 4px 4px 0px #00000040',
        'subscription-card': '0px 1.77px 22.08px 0px #00000040',
        'testimony-card': "0px 4px 38px 0px #00000040",
        'related-news-card': "0px 4.46px 27.85px 0px #00000040"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1F4E79",
        borderColor: "#6E6E6E80",
        backgroundColor: "#F4F6F9",
        secondaryColor: "#329DFD",
        secondaryColor200: "#61A6E4",
        secondaryGreenColor: "#329DFD",
        buttonPrimary: "#27AE60",
        secondaryTextColor: "#6E6E6E",
        primaryBlack: "#000000",
        footerBlack: "#1F1C1C",
        weekly: "#B632FD",
        // monthly: "",
        quaterly: "#15AE0BCC",
        yearly: "#F9C03B",
        textColor: "#6E6E6E"
        
      },
      
      fontFamily: {
        mono: ['var(--font-montserrat)', 'mono'],
        poppins: ['var(--font-poppins)', 'poppins'],
        //  custom: ['var(--font-inter)', 'sans-serif'],

      }
    },
  },
  plugins: [
     
  ],
};
export default config;
