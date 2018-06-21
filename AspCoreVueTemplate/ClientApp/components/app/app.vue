<template>
    <div id='app'>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    import HelloComponent from '../hello/hello.vue';
    import HelloDecoratorComponent from '../hello-decorator/hello-decorator.vue';

    @Component({
        components: {
            HelloComponent: HelloComponent,
            HelloDecoratorComponent: HelloDecoratorComponent
        }
    })
    export default class AppComponent extends Vue {
        data() {
            return {
                name: "World"
            }
        }
    }
</script>