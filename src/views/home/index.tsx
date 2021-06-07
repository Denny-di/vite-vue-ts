import { defineComponent, ref } from "vue";
import style from "./index.module.less";
export default defineComponent({
    name: "home",
    setup() {
        const foo = ref<boolean>(true);

        const bars: string[] = ["bar1", "bar2"];
        return () => (
            <div class={style["home"]}>
                <div>home</div>
                {foo.value && (
                    <div>
                        <span>foo</span>
                    </div>
                )}

                <div>
                    {bars.map((item) => (
                        <span>{item}</span>
                    ))}
                </div>
            </div>
        );
    },
});
