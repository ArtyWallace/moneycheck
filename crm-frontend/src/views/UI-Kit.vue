<template>
  <div>
    <div>Buttons:</div>
    <br>
    <app-button>Fill</app-button>
    &nbsp;
    <app-button
        disabled
    >Disabled</app-button>
    &nbsp;
    <app-button
        mode="outline"
    >Outline</app-button>
    &nbsp;
    <app-button
        mode="outline"
        disabled
    >Disabled</app-button>
    &nbsp;
    <app-button
        mode="empty"
    >Empty</app-button>
    &nbsp;
    <app-button
        mode="empty"
        disabled
    >Disabled</app-button>
  </div>
</template>

<script>
import Button from '@/components/UI-Kit/buttons/Button';

export default {
  name: 'UI-Kit',
  components: {
    'app-button': Button
  }
}
</script>