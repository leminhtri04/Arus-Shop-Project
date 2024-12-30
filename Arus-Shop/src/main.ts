import { createApp } from 'vue'
import './style.css'
import { App } from 'antd';
import router from './router/router.config.vue';

const app = createApp(App);
app.use(router);
app.mount("#app");
