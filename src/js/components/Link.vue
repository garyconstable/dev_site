<template>
    <div class="links-item mb-4">
        <h3>
            <a v-bind:href="href">{{title}}</a>
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
