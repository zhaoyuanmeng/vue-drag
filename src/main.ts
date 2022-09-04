import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'; // 创建vue实例

const app = createApp(App);

app.use(router); // 挂载路由
app.use(store); // 挂载pinia

app.mount('#app');
