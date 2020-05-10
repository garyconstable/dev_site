<template>
    <div class="links mt-4">
        <reveal title="Links" active="">
            <template v-slot:content>
                <link-item title="Optics Warehouse" href="https://www.opticswarehouse.co.uk/" />
                <link-item title="MyAdsEre" href="https://myadsere.com/" />
                <link-item title="Crowdcube" href="https://www.crowdcube.com/" />
                <link-item title="The Board Basement" href="https://www.theboardbasement.com/" />
                <link-item title="Violet Grey" href="https://violetgrey.co.uk/" />
                <link-item title="Circadian" href="https://activecentres.org/" />
                <link-item title="Screen Europe" href="https://www.screeneurope.com/" />
                <link-item title="Abundance and Health" href="https://www.abundanceandhealth.co.uk/" />
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
