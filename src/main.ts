/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-11 10:46:08
 */
import { createApp } from 'vue';
import { router } from './router';
//import App from './App.vue'
import App from './App';
import storage from '@utils/storage';

// global styles
import 'normalize.css/normalize.css';
import './styles/index.scss';
import '@utils/rem';
// vant components
import { useVantComponet } from '@utils/vant.component';

const app = createApp(App);

app.config.globalProperties.$storage = storage;

useVantComponet(app);

app.use(router).mount('#app');
