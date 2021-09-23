/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-09-23 18:00:40
 */
import { createApp } from 'vue';

import App from './App.vue';

// global styles
import 'normalize.css/normalize.css';
import './styles/index.scss';
import '@/config/rem';
// vant components
import { setupVantComponet } from '@/hooks/vant';
import { setupRouter, router } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { initAppConfig } from '@/config';

async function bootstrap() {
  const app = createApp(App);

  initAppConfig();

  // register router
  setupRouter(app);
  setupRouterGuard(router);

  // register vant components
  setupVantComponet(app);

  await router.isReady();

  app.mount('#app');
}

void bootstrap();
