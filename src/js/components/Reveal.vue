<template>
  <div class="reveal">
    <h4
      :class="active"
      class="reveal-header py-3 mb-2"
      @click.stop="toggleContent($event)"
    >
      {{ title }}
      <icon :icon="['fa', 'caret-down']"></icon>
    </h4>
    <div class="reveal-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "active"],

  methods: {
    toggleContent(event) {
      const matches = document.querySelectorAll(".reveal-header");
      matches.forEach(function(item) {
        if (item != event.target) {
          //item.nextElementSibling.classList.remove('active');
          item.classList.remove("active");
        }
      });
      //event.target.nextElementSibling.classList.toggle('active')
      event.target.classList.toggle("active");
      window.dispatchEvent(new Event("scroll"));
    }
  }
};
</script>
