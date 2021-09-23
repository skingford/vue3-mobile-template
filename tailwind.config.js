/*
 * @Author: kingford
 * @Date: 2021-09-23 19:14:44
 * @LastEditTime: 2021-09-23 19:28:23
 */
module.exports = {
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
