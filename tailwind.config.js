/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1200px'
      },
    },
    extend: {
      colors:{
        "primary":"#4D4D4D",
        "dark_blue":"#0F0BC7",
        "full_light_blue":"#F6F5FF",
        "dark_green": "#313133",
        "light_green":"#CCCCCC",
        "full_dark_green":"#333333",
        "navi_blue": "#040335",
      },
      lineHeight:{
        "21px":"21px",
        "62px":"62px",
        "30px":"30px",
        "56px":"56px",
        "26px":"26px",
        "60px":"60px",
        "17px":"17px",
        "67px":"67px",
        "80px":"80px",
        "44px":"44px",
        "46px":"46px"
      },
      padding:{
        "30px":"30px",
        "150px":"150px",
        "54px":"54px",
        "45px":"45px",
        "50px":"50px",
        "18px":"18px",
        "52px":"52px",
        "67px":"67px",
        "53px":"53px",
        "55px":"55px",
        "7px":"7px",
        "6px":"6px",
      },
      borderRadius:{
        "50px":"50px",
        "20px":"20px",
        "40px":"40px",
        "15px":"15px",
        "500px":"500px",
        "71px":"71px",
        "42px":"42px",
        "22px":"22px",
      },
      letterSpacing:{
        "0.32px" : "0.32px",
        "0.41px":"0.41px",
        "0.05em" :"0.05em",
        "0.03em":"0.03em",
        "0.02em":"0.02em",
        "0.06em":"0.06em",
        "0.011em":"0.011em"
      },
      fontSize:{
        "50px":"50px",
        "56px":"56px",
        "20px":"20px",
        "60px":"60px",
        "72px":"72px",
        "42px":"42px",
        "46px":"46px",
        "40px":"40px",
      },
      margin:{
        "50px":"50px",
        "18px":"18px",
        "10px":"10px",
        "150px":"150px",
        "60px":"60px",
        "52px":"52px",
        "67px":"67px",
        "138px":"138px",
        "140px":"140px",
      },
      gap:{
        "30px":"30px",
        "11px":"11px",
        "3px":"3px",
        "23px":"23px",
        "50px":"50px",
      },
      width:{
        "18px":"18px"
      },
      height:{
        "18px":"18px",
      },
      maxWidth:{
        "575px":"575px",
      }
    },
  },
  plugins: [],
}

