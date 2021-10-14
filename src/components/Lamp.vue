<template>
  <div class='lamp' :class='{active:isActive}'>
    <Timer v-if="isActive" />
  </div>
</template>

<script>
import Timer from "./Timer";

export default {
  components: {Timer},
  props: ['isActive'],

}
</script>
<style>
.lamp {
  height: 80px;
  width: 80px;
  border-radius: 100%;
  margin: 5px;
  opacity: 0.5;
  box-shadow: 0 0 90px rgba(114, 93, 93, 1);
}

.active {
  opacity: 1;
}
</style>
