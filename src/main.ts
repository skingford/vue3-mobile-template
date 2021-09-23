/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-09-23 14:06:44
 */
import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';

// global styles
import 'normalize.css/normalize.css';
import './styles/index.scss';
import '@utils/rem';
// vant components
import { useVantComponet } from '@utils/vant.component';

const app = createApp(App);

useVantComponet(app);

app.use(router).mount('#app');
