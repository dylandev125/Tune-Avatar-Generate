/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      theme: "#AB40FF",
      darkbg: "#00082F",
      white: "#FFFFFF",
      secondary: "#AA9DDB"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'itembg': "url('/public/assets/itembg.png')",
        'itemhoverbg': "url('/public/assets/itemhoverbg.png')",
        'launchbg': "url('/public/assets/launchpadbg.png')",
        'btnbg': "url('/public/assets/launchbtn.png')",
        'listbtn': "url('/public/assets/listbtn.png')",
        'prevbtn': "url('/public/assets/prev.png')",
        'nextbtn': "url('/public/assets/next.png')",
      },

      backgroundColor: {
        'transparent' : "transparent"
      }
    },
    fontFamily: {
      'molot': ['Molot'],
      'play': ['Play']
    },
  },
  plugins: [],
}
