import { defineComponent } from "vue";
import style from "./index.module.less";

export default defineComponent({
    name: "Layout",
    setup() {
        return () => (
            <a-layout class={style["home-layout"]}>
                <a-layout-header>header</a-layout-header>
                <a-layout>
                    <a-layout-sider width="200" theme="light">
                        <a-menu
                            mode="inline"
                            class="menu-custom"
                            selectedKeys={["home"]}
                        >
                            <a-menu-item key="home">
                                <span>首页</span>
                            </a-menu-item>
                        </a-menu>
                    </a-layout-sider>
                    <a-layout-content id="main">
                        <router-view></router-view>
                    </a-layout-content>
                </a-layout>
            </a-layout>
        );
    },
});
