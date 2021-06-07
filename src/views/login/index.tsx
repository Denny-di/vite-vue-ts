import { defineComponent, reactive } from "vue";
export default defineComponent({
    name: "login",
    setup() {
        const form = reactive({
            user_name: "",
            password: "",
        });

        // 登录
        const handleSubmit = () => {
            console.log("form=>", form);
        };
        return () => (
            <div>
                <a-form model={form} onFinish={handleSubmit}>
                    <a-form-item name="mobile">
                        <a-input
                            placeholder="输入用户名"
                            v-model={[form.user_name, "value"]}
                        ></a-input>
                    </a-form-item>
                    <a-form-item name="password">
                        <a-input
                            placeholder="输入密码"
                            type="password"
                            v-model={[form.password, "value"]}
                        ></a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit" block>
                            登录
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        );
    },
});
