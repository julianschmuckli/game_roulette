<template>
  <div class="chip" v-if="value != 0">{{ value }}</div>
</template>

<script>
export default {
  name: "Chip",
  props: {
    value: Number
  }
}
</script>

<style>
.chip{
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  opacity: 0.9;
  display: inline;
  background: #00f;
  border-radius: 12px;
  padding-left: 5px;
  padding-right: 5px;
  color: white;
}
</style>
