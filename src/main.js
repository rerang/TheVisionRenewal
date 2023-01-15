import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router).mount('#app');

app.config.globalProperties.MKURL = "http://3.39.153.21:8000/thevision/";