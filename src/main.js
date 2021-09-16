import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// styles
import "@/styles/admin.scss";

// Element Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// ECharts
import "echarts";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
