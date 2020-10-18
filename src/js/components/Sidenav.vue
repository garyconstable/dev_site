<template>
  <div class="sidenav">
    <div class="text-right mt-2 mb-4">
      <a class="link" @click="hide"><span></span></a>
    </div>
    <contactform></contactform>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {};
  },

  created() {},

  methods: {
    hide() {
      const el = document.body;
      el.classList.remove("sideOpen");

      return false;
    }
  }
};
</script>
