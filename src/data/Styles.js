// Global JS Variables for Styled Components
// Typically imported as `lmnts`

// Usage
// 1. First:
// import * as lmnts from '../../../path/to/Styles'
// 2. Use it in your SC: `color: ${lmnts.ClrWhite};`


module.exports = {
    // Typography
    Fnt: {
      Header: "'Tinos', 'Georgia', serif",
      Body: "'Montserrat', 'San Francisco', 'Helvetica', 'Roboto', 'Arial', sans-serif"
    },
  
    // Base Measurements
    Base: {
      Size: 60,
      Type: 14,
      Grid: {
        Nav: {
          LgSize: 200,
          MdSize: 150,
          SmSize: 40
        },
        Gutter: {
          Top: 20,
          Bottom: 20,
          Right: 20,
          Left: 20
        }
      }
    },
  
    // Palette
    Clr: {
      White: "#ffffff",
      Black: "#000000",
      Flesh: "#F7D5BA",
      Grey: "#e2e2e2",
      ForestGrey: "#434343"
    },
  
    // Animations
    Anim: {
      Page: {
        Direction: "up",
        Type: "cover",
        Duration: 1,
        Color: "#e2e2e2"
      }
    }
  };