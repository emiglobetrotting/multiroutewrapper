<script setup lang="ts">
import { onMounted, defineEmits } from "vue";

const emit = defineEmits<{
  (e: "update:selected-menu-item", sentinelvalue: string): void,
}>();

onMounted(() => {
  emit("update:selected-menu-item", "GENERATE-REPORTS");
});

</script>

<template>
  <div>
    <p class="text-center pt-70">
      Generate Reports Page
    </p>
  </div>
</template>
