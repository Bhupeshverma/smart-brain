const base = {
    easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    colorWhite: "rgb(255, 255, 255)",
    colorBlack: "rgb(0, 0, 0)"
  };
  
  const dark = {
    id: "dark",
    ...base,
    backgroundColor: "#010e2c",
    textColor: '#fff',
    navColor: "#061a44"
  };
  
  const light = {
    id: "light",
    ...base,
    backgroundColor: "#fafafa",
    textColor: '#232323',
    navColor: "lightcoral"
  };
  
  export const Theme = { dark, light };