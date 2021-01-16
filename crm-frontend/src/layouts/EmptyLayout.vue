<template>
  <div class="empty-layout">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout'
}
</script>

<style lang="scss" scoped>
.empty-layout {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .1);
}
</style>