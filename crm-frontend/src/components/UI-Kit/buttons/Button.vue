<template>
  <div
      class="button"
      :class="[`button button--${mode}`, { 'disabled': disabled, }]"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    mode: {
      type: String,
      required: false,
      default: 'fill'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  min-width: 160px;
  text-align: center;
  font-weight: 600;
  padding: 11px 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s ease-in;
  &--fill {
    color: $white;
    background: $accent-blue;
    box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
    &:hover {
      background: $accent-blue-hover;
    }
  }
  &--outline {
    color: $accent-blue;
    border: 1px solid $accent-blue;
    &.disabled {
      background: none;
      color: $icon-gray;
      border-color: $icon-gray;
    }
    &:hover {
      color: $accent-blue-hover;
      border: 1px solid $accent-blue-hover;
    }
  }
  &--empty {
    color: $accent-blue;
    &.disabled {
      background: none;
      color: $icon-gray;
    }
    &:hover {
      color: $accent-blue-hover;
    }
  }
}
.disabled {
  background: $icon-gray;
  pointer-events: none;
}
</style>