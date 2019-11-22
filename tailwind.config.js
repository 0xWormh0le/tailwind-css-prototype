module.exports = {
  theme: {
    extend: {
      colors: {
        sidemenu: {
          default: '#11142E',
          hover: '#32354d',
          text: '#CFCED3'
        },
        header: {
          default: '#303555',
          text: '#979aaa'
        },
        main: {
          dark: '#555974',
          default: '#797E94',
          light: '#9397A9',
        },
        
        formControl: {
          input: {
            default: '#EDEDF1',
            hover: '#a0a4bf'
          },
          lightgray: '#EDEDF1'
        },

        background: '#F7F6FC',

        dark: '#555974',
        info: '#524BCD',
        warning: '#FDA362',
        success: '#01AA85',
        danger: '#DA3D4C'
      },

      
      config: {
        angle: '0.6rem',
        sidebarWidth: '18rem',
        headerHeight: '5rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
