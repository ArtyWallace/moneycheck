<template>
  <app-empty-layout
    v-if="layout === 'empty'"
  />
  <app-main-layout
    v-else-if="layout === 'main'"
  />
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import EmptyLayout from '@/layouts/EmptyLayout';

export default {
  name: 'App',
  components: {
    'app-main-layout': MainLayout,
    'app-empty-layout': EmptyLayout
  },
  data: () => ({}),
  mounted () {
    console.log(this.$route.meta);
  },
  computed: {
    layout () {
      return this.$route.meta.layout;
    }
  }
}
</script>

<style lang="scss">
@import '/scss/index';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
