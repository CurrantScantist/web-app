import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// styles
import "@/styles/admin.scss";

// Element Plus
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

// register globally (or you can do it locally)
//App.component('v-chart', ECharts)

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
