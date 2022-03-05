<script setup lang="ts">
import { onMounted, defineEmits } from "vue";

const emit = defineEmits<{
  (e: "update:selected-menu-item", sentinelvalue: string): void,
}>();

onMounted(() => {
  emit("update:selected-menu-item", "ADD-NEW-REQUESTS");
});

</script>

<template>
  <div>
    <p class="text-center pt-70">
      Add New Requests Page
    </p>
  </div>
</template>