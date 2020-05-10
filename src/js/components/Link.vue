<template>
    <div class="links-item mb-2">
        <h3>
            <a v-bind:href="href" target="_blank">{{title}}</a>
        </h3>
    </div>
</template>

<script>
    export default {
        props: [
            'title', 'href'
        ]
    };
</script>
