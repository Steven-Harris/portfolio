import '@/assets/css/tailwind.css';

import { FontAwesomeIcon } from '@/plugins/font-awesome';
import { createApp } from 'vue';

import App from './App.vue';

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
