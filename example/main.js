import Vue from "vue";
import App from "./App.vue";
import FRender from "f-render";
import ElementUI from "element-ui";
import EleForm from "vue-ele-form";

import EleDynamic from "vue-ele-form-dynamic";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css";


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(EleForm, {
    'table-editor': {
        isShowDelete: false, // 所有的 table-editor 都会有 isShowDelete = false 的属性值, 即不显示删除按钮
        isShowAdd: false,
        showTooltip: true
    }
});
Vue.component("f-render", FRender);
Vue.component("dynamic", EleDynamic);

new Vue({
    render: h => h(App)
}).$mount("#app");
