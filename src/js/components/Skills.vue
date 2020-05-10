<template>
    <div class="skills mt-4">
        <reveal title="Skills" active="active">
            <template v-slot:content>
                <skill title="PHP" stars="5" />
                <skill title="HTML / CSS" stars="4" />
                <skill title="Vue Js" stars="3" />
            </template>
        </reveal>
    </div>
</template>

<script>
    import eventBus from "../eventBus";

    export default {
        methods: {
            toggleContent(event){
                eventBus.$emit("toggleContent", event);
            }
        }
    };
</script>
