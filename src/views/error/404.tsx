import { defineComponent } from "vue";
import style from "./index.module.less";

export default defineComponent({
    render() {
        return (
            <div class={style["error-page"]}>
                <p class={style["error-tips"]} style="font-size: 100px">
                    404
                </p>
                <p class={style["error-tips"]}>抱歉，找不到此页面~</p>
                <div class={style["tips-en"]}>
                    <p>Sorry, the site now can not be accessed.</p>
                    <p>
                        您请求访问的页面暂时找不到，我们建议您返回首页进行浏览，谢谢！
                    </p>
                </div>
                <router-link to="/home">
                    <a-button type="primary">返回首页</a-button>
                </router-link>
            </div>
        );
    },
});
