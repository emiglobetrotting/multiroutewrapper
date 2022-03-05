<script setup lang="ts">
import { onMounted, defineEmits } from "vue";

const emit = defineEmits<{
  (e: "update:selected-menu-item", sentinelvalue: string): void,
}>();

onMounted(() => {
  emit("update:selected-menu-item", "DASHBOARD");
});

</script>

<template>
  <div>
    <p class="text-center pt-70">
      Dashboard Page
    </p>
  </div>
</template>
