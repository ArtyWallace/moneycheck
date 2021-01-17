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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');
@import '/scss/index';
</style>
