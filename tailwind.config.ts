import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      '2lg': '1228px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1480px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    clipPath: {
        mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem))",
    },
     backgroundImage: {
        'hero': "url('/hero.png')",
        'footer': "url('/footerImage.svg')",
        "footerOverlay": "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(31, 28, 28, 0.8) 100% ",
        "subscription": "url('/subscription.svg')",
        "becomeGrantImage": "url('/becomeGrantor.svg')",
        "becomeConsultantImage": "url('/becomeConsultant.svg')",
        "becomeConsultantImageMobile": "url('/becomeGrantMobile.svg')",


        'linearGradient': 'linear-gradient(180deg, #FD32B2 0%, #F2D4E7 100%)',
        'bronze': "linear-gradient(90deg, #972921 67%, #E8B744 100%)",
        'silver': "linear-gradient(90deg, #A19FA3 29.5%, rgba(255, 255, 255, 0.7) 100%)",
        'gold': "linear-gradient(90deg, #C55001 0%, #FCF99C 100%)",
        'platinum': "linear-gradient(90deg, #D289A1 0%, #EE632A 100%)",
        'consultantTitle': "linear-gradient(90deg, #27AE60 0%, #104828 100%)",
        'consultanButton': "linear-gradient(90.26deg, #176337 26.49%, #50FF99 85.48%)",
        'grantColor': "linear-gradient(90deg, #1F4E79 0%, #3990DF 100%)",
        'qa-background': 'linear-gradient(176.45deg, #B2EBF2 2.73%, #D1C4E9 127.16%)',
        'gradient-border': 'linear-gradient(180deg, rgba(52, 168, 83, 0.5) 0%, #191919 24.5%, rgba(28, 243, 254, 0.7))',
        'service-card-1': "linear-gradient(180deg, #F3F8FF 0%, #FAFCFE 100%)",
        'service-card-2': "linear-gradient(180deg, rgba(243, 232, 255, 0.5) 0%, #FEFDFF 100%)",
        'service-card-3': "linear-gradient(180deg, #EAF5ED 0%, #FFFFFF 100%)",
        'service-card-4': "linear-gradient(180deg, rgba(243, 240, 210, 0.1) 0%, #FFFFFF 67.5%)",
        'service-card-5': " linear-gradient(180deg, rgba(252, 231, 243, 0.4) 0%, #FFFFFF 75%)",
        'service-card-6': "linear-gradient(180deg, rgba(255, 237, 213, 0.2) 19%, #FFFFFF 100%)",
        
      },
    extend: {
       boxShadow: {
        'custom-green': '0px 4px 35px 0px #05482440',
        'card': '0px 4px 15px -5px rgba(0, 0, 0, 0.5)',
        'grant-card': '0px 4px 4px 0px #00000040',
        'subscription-card': '0px 1.77px 22.08px 0px #00000040',
        'testimony-card': "0px 4px 38px 0px #00000040",
        'related-news-card': "0px 4.46px 27.85px 0px #00000040",
        'grant-service-card': "0px 2px 25.01px 0px #00000040",
        'graphchart': "0px 2px 10px 0px #329DFD40",
        'walletSummary': "0px 2px 10px 0px #329DFD4D",
        'qa-shadow': "0px 0px 42.03px -1.72px #00000030",
        'genera-user-shdow-card': "0px 4px 25px 1px #4285F440",
        'active-summary': "4px 0px 25px 0px #4285F440",
        'grant-card-dashboard': "0px 4px 4px 0px #4285F440",
        'headline-shadow': "0px 4px 50px 0px #00000080 inset",
        'chart-grant': "0px 4px 25px 0px #329DFD40",
        'service-shadow': "4px 10px 15px 0px #329DFD4D",
        'article-shadow': "1px 1px 15px 0px #329DFD4D",
        'article-tags': "0px 0px 4px 0px #329DFD4D",
        "read-more-shadow":'0px 0px 4px 0px #329DFD4D',
        "complete-shadow-1": "0px 2px 10px 0px #329DFD4D",
        "complete-shadow-2": "0px 1px 4px 0px #00000040",
        "complete-shadow-3": "0px 2px 10px 0px #329DFD4D",

        

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1F4E79",
        errorColor: "#FF0101",
        borderColor: "#6E6E6E80",
        backgroundColor: "#F4F6F9",
        secondaryColor: "#329DFD",
        secondaryColor200: "#61A6E4",
        secondarycolor300: "#EFF6FF",
        secondaryGreenColor: "#329DFD",
        buttonPrimary: "#27AE60",
        secondaryTextColor: "#6E6E6E",
        primaryBlack: "#000000",
        footerBlack: "#1F1C1C",
        weekly: "#B632FD",
        // monthly: "",
        quaterly: "#15AE0BCC",
        yearly: "#F9C03B",
        textColor: "#6E6E6E",
        boderConsultant: "#6E6E6E1A",
        newPrimaryTextColor: "#333333",
        grantBlack: " #000000",
        profileHeaderColor: "#C2C9D4B2",
        dashboardActionColor: "#27AE60",
        subscriptionBackground: "#329DFD52",
        tagsBackground: "#EAF4FE"

        
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
