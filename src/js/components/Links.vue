<template>
    <div class="links mt-4">
        <reveal title="Links" active="">
            <template v-slot:content>
                <link-item title="The Board Basement" href="#" />
                <link-item title="Violet Grey" href="#" />
                <link-item title="MyAdsEre" href="#" />
                <link-item title="Crowdcube" href="#" />
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
