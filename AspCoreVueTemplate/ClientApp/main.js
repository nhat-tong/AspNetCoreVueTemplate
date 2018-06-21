import Vue from "vue";
import AppComponent from './components/app/app.vue';
var v = new Vue({
    el: "#app",
    render: function (h) { return h(AppComponent); }
});
if (module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=main.js.map