/*
 * @Author: kingford
 * @Date: 2021-07-11 10:13:13
 * @LastEditTime: 2021-09-23 20:00:42
 */
// 设计稿的尺寸默认为375(37.5)，而是 750 (75)
const DESIGN_SIZE = 37.5;

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      // 数字|函数）表示根元素字体大小或根据input参数返回根元素字体大小
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : DESIGN_SIZE;
      },
      // 使用通配符*启用所有属性
      propList: ['*'],
      // 允许在媒体查询中转换px
      mediaQuery: true,
      // 过滤掉.norem-开头的class，不进行rem转换
      selectorBlackList: ['.norem'],
    },
  },
};
