<template>
    <div class="col-md-4 sidebar">
        <affix class="sidebar-menu" relative-element-selector=".main-content" style="width: 300px">
            <div class="affix-first">
                <!-- section -->
                <h3 class="name-title"><span>Gary</span>Constable</h3>
                <p>Web developer</p>
                <ul class="list-inline">
                    <li class="list-inline-item"><a
                            href="hmailto:garyconstable80@gmail.com"
                    ><icon :icon="['fa', 'envelope-square']"></icon></a></li>
                    <li class="list-inline-item"><a
                            href="https://www.linkedin.com/in/gary-constable/"
                            target="_blank"
                    ><icon :icon="['fab', 'linkedin']"></icon></a></li>
                    <li class="list-inline-item"><a
                            href="https://github.com/garyconstable"
                            target="_blank"
                    ><icon :icon="['fab', 'github-square']"></icon></a></li>
                </ul>
                <!-- section -->
                <skills />
                <!-- section -->
                <links />
            </div>
        </affix>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Affix from 'vue-affix';

    Vue.use(Affix);

    export default {
        data() {
            return {

            };
        },
    };
</script>
