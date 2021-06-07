import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteImport from "vite-plugin-importer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        viteImport({
            libraryName: "ant-design-vue",
            libraryDirectory: "es",
            style: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                // additionalData: "@import '@/assets/less/mixin.less';",
                // modifyVars: {
                //     "primary-color": "#FD7B2A", // 全局主色
                //     "link-color": "#FD7B2A", // 链接色
                //     "heading-color": "#3F3F3F", // 标题色
                //     "text-color": "#65676D", // 主文本色
                //     "text-color-secondary": "#828387", // 次文本色
                //     // "success-color": "#52c41a", // 成功色
                //     // "warning-color": "#faad14", // 警告色
                //     // "error-color": "#f5222d", // 错误色
                //     // "font-size-base": "14px", // 主字号
                //     // "disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
                //     // "border-radius-base": "4px", // 组件/浮层圆角
                //     // "border-color-base": "#d9d9d9", // 边框色
                //     // "box-shadow-base": " 0 2px 8px rgba(0, 0, 0, 0.15)", // 浮层阴影
                // },
                javascriptEnabled: true,
            },
        },
    },

    server: {
        host: "0.0.0.0",
        port: 3001,
    },
});
