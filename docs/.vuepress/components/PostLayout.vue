<template>
  <div class="page">
    <h1 v-html="title"></h1>
    <Content />
    {{$page.excerpt}}
  </div>
</template>
<script>
  export default {
    computed: {
      title() {
        return this.$page.title
      }
    }
  }
</script>
