import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default defineComponent({
    render() {
        return (
            <a-config-provider locale={zhCN}>
                <router-view />
            </a-config-provider>
        );
    },
});
