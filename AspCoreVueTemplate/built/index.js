import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
var v = new Vue({
    el: "#app",
    template: "\n    <div>\n        Name: <input v-model=\"name\" type=\"text\">\n        <h1>Hello Component</h1>\n        <hello-component :name=\"name\" :initialEnthusiasm=\"5\" />\n        <h1>Hello Decorator Component</h1>\n        <hello-decorator-component :name=\"name\" :initialEnthusiasm=\"5\" />\n        </div>\n    ",
    data: { name: "World" },
    components: {
        HelloComponent: HelloComponent,
        HelloDecoratorComponent: HelloDecoratorComponent
    }
});
//# sourceMappingURL=index.js.map