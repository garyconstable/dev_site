<template>
  <div class="skills mt-2">
    <reveal title="Skills" active="">
      <template v-slot:content>
        <skill title="Magento 2" stars="4" />
        <skill title="PHP" stars="5" />
        <skill title="SASS" stars="4" />
        <skill title="Apache" stars="4" />
        <skill title="Linux" stars="3" />
        <skill title="Vue Js" stars="3" />
        <skill title="Wordpress" stars="5" />
        <skill title="Craft CMS" stars="4" />
      </template>
    </reveal>
  </div>
</template>

<script>
import eventBus from "../eventBus";

export default {
  methods: {
    toggleContent(event) {
      eventBus.$emit("toggleContent", event);
    }
  }
};
</script>
