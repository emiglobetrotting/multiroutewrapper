<script setup lang="ts">
import MenuNav from "./MenuNav.vue";

const props = defineProps<{
  selectedMenuItem: string | null
}>();

</script>

<template>
  <div class="d-block vh-100 vw-100">
    <div class="d-block position-relative">
      <div class="position-fixed shadow flex-box flex-direction-row w-100-percent flex-nowrap left-0 top-0 right-0 m-0 p-0" style="height:70px;background-color:#fff;z-index:1023"></div>
    </div>
    <div class="flex-box flex-direction-row w-100-percent min-vh-100 flex-nowrap m-0 pr-0 pb-0 pl-0 pt-70">
      <div class="flex-w-300-px position-relative">
        <div class="position-fixed top-0 left-0 h-100-percent w-300-px pt-70" style="z-index:1020;">
          <div class="m-0 p-0 w-100-percent h-100-percent overflow-y-auto overflow-x-hidden" style="background-color:#fff;">
            <menu-nav :selected-menu-item="selectedMenuItem"></menu-nav>
          </div>
        </div>
      </div>
      <div class="flex-fill m-0 p-0 min-h-100-percent text-left" style="background-color:#fff;">
        <section>
          <slot></slot>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.w-300-px {
  width: 300px;
}
</style>
