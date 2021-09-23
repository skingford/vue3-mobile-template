/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-09-23 15:01:37
 */
import { createApp } from 'vue';

import App from './App.vue';

// global styles
import 'normalize.css/normalize.css';
import './styles/index.scss';
import '@utils/rem';
// vant components
import { setupVantComponet } from '@/hooks/vant';
import { setupRouter, router } from '@/router';

const app = createApp(App);

async function bootstrap() {
  const app = createApp(App);

  // register router
  setupRouter(app);

  // register vant components
  setupVantComponet(app);

  await router.isReady();

  app.mount('#app');
}

void bootstrap();
