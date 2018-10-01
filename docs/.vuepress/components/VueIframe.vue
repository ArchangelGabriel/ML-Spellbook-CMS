<template>
  <vue-friendly-iframe :src="'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FwZnrdYYeeRkFnrnk1xgXsh%2FComponent-Library%3Fnode-id%3D1764%253A11'"></vue-friendly-iframe>
</template>
<script>
import VueFriendlyIframe from 'vue-friendly-iframe';

  export default {
    computed: {
      title() {
        return this.$page.title
      }
    },
    components: {
      'vue-friendly-iframe': VueFriendlyIframe
    }
  }
</script>
