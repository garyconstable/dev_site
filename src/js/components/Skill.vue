<template>
    <div class="skills-item mb-4">
        <h3>{{title}}</h3>
        <template v-for="i in 5">
            <icon v-if="i <= stars" :icon="['fa', 'star']"></icon>
        </template>
    </div>
</template>

<script>
    export default {
        props: [
            'title', 'stars'
        ],
    };
</script>
