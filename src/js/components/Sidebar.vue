<template>
  <div class="col-md-4 sidebar">
    <affix
      class="sidebar-menu"
      relative-element-selector=".main-content"
      style="width: 300px"
    >
      <div class="affix-first">
        <div class="person-img mb-5"></div>

        <!-- section -->
        <h3 class="name-title"><span>Gary</span>Constable</h3>
        <p>Magento (Adobe Commerce) & Frontend PHP Web developer</p>
        <a class="mailme" href="mailto:garyconstable80@gmail.com"
          >garyconstable80@gmail.com</a
        >
        <a class="telme" href="tel:07702795435">07702795435</a>
        <ul class="list-inline socials">
          <li class="list-inline-item">
            <a href="mailto:garyconstable80@gmail.com">
              <icon :icon="['fa', 'envelope-square']"></icon>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="https://www.linkedin.com/in/gary-constable/"
              target="_blank"
            >
              <icon :icon="['fab', 'linkedin']"></icon>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://github.com/garyconstable" target="_blank">
              <icon :icon="['fab', 'github-square']"></icon>
            </a>
          </li>
        </ul>
        <!-- section -->
        <links />
        <!-- section -->
        <skills />
      </div>
    </affix>
  </div>
</template>

<script>
import Vue from "vue";
import Affix from "vue-affix";

Vue.use(Affix);

export default {
  data() {
    return {};
  },

  created() {
    window.addEventListener("resize", this.handleResize);

    window.addEventListener("orientationchange", this.handleResize);
  },

  methods: {
    handleResize() {
      window.dispatchEvent(new Event("scroll"));
    }
  }
};
</script>
