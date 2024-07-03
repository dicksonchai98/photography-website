import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ig-gradient': 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)'
      },
      height: {
        151: '151px',
        986: '986px',
        132: '132px',
        427: '427px',
        676: '676px',
        535: '535px',
        395: '395px',
        180: '180px',
        158: '158px',
        547: '547px',
        622: '622px',
        465: '465px',
        280: '280px'
      },
      lineHeight: {
        140: '140px'
      },
      fontSize: {
        '15px': '15px',
        '140px': '140px'
      },
      colors: {
        898989: '#898989',
        '1f1f1f': '#1f1f1f'
      },
      padding: {
        '104px': '104px'
      },
      width: {
        774: '774px',
        1290: '1290px',
        394: '394px',
        163: '163px',
        399: '399px',
        757: '757px'
      },
      top: {
        '300px': '300px',
        '115px': '115px'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('tw-elements/plugin.cjs')]
} satisfies Config
