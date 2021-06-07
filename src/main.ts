import { createApp } from "vue";
import App from "./App";
import router from "./router";
import { setupAntd } from "./utils/antd";

const app = createApp(App);
setupAntd(app); // 注册使用的ant-design-vue组件

app.use(router);
//.use(store);
app.mount("#app");
