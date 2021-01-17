<template>
  <div class="main">
    <app-menu/>
    <div class="main__inner">
      <app-header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import Header from '@/components/Header';

export default {
  name: 'MainLayout',
  components: {
    'app-menu': Menu,
    'app-header': Header
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  &__inner {
    width: 100%;
    background: #E5E5E5;
  }
}
</style>