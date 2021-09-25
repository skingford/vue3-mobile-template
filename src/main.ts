/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-09-25 11:53:48
 */
import { createApp } from 'vue';

// global styles
import 'normalize.css/normalize.css';
import './styles/index.scss';
import './styles/tailwind.css';
// root component
import App from './App.vue';
// vant components
import { setupVantComponet } from '@/hooks/vant';
import { setupRouter, router } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { setupErrorHandle, setupVConsole } from '@/logics';
import { initAppConfig } from '@/config';

async function bootstrap() {
  const app = createApp(App);

  // 错误收集
  setupErrorHandle(app);

  setupVConsole();

  // app 初始化配置
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
