import Vue from "vue";
import AppComponent from './components/app/app.vue';

let v = new Vue({
    el: "#app",
    render: h => h(AppComponent)
});

// Enables Hot Module Replacement.
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
