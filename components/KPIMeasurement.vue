<script setup lang="ts">
import { onMounted, defineEmits  } from "vue";

const emit = defineEmits<{
  (e: "update:selected-menu-item", sentinelvalue: string): void,
}>();

onMounted(() => {
  emit("update:selected-menu-item", "KPI-MEASUREMENT");
});

</script>

<template>
  <div>
    <p class="text-center pt-70">
      KPI Measurement Page
    </p>
  </div>
</template>

