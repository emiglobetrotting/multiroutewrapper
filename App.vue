
<script setup lang="ts">

import { ref } from "vue"
import Wrapper from "./components/Wrapper.vue";

const selectedMenuItem = ref<string | null>(null);

selectedMenuItem.value = "DASHBOARD"; //Default page

</script>

<template>
  <Wrapper :selected-menu-item="selectedMenuItem">
    <router-view
      @update:selected-menu-item="($val: string) => selectedMenuItem = $val"
    ></router-view>
  </Wrapper>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

img {
  vertical-align: middle;
  border-style: none;
}

template {
  display: none;
}

.pt-70 {
  padding-top: 70px !important;
}

.h-100-percent {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.min-h-100-percent {
  min-height: 100%;
  height: auto !important;
  height: 100%;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

.text-left {
  text-align: left !important;
}

.text-center {
  text-align: center !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.left-0 {
  left: 0 !important;
}

.top-0 {
  top: 0 !important;
}

.right-0 {
  right: 0 !important;
}

.w-100-percent {
  width: 100% !important;
}

.m-0 {
  margin: 0 !important;
}

.p-0 {
  padding: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

.list-style-none {
  list-style: none !important;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-y-auto {
  overflow-y: auto;
}

.position-relative {
  position: relative !important;
}

.position-fixed {
  position: fixed !important;
}

.flex-box {
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex-direction-row {
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

.flex-direction-column {
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

.flex-nowrap {
  -ms-flex-wrap: nowrap !important;
  flex-wrap: nowrap !important;
}

.flex-fill {
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}

.flex-w-30-px {
  -webkit-box-flex: 0 0 30px; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 0 0 30px; /* OLD - Firefox 19- */
  width: 30px; /* For old syntax, otherwise collapses. */
  -webkit-flex: 0 0 30px; /* Chrome */
  -ms-flex: 0 0 30px; /* IE 10 */
  flex: 0 0 30px; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex-w-300-px {
  -webkit-box-flex: 0 0 300px; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 0 0 300px; /* OLD - Firefox 19- */
  width: 300px; /* For old syntax, otherwise collapses. */
  -webkit-flex: 0 0 300px; /* Chrome */
  -ms-flex: 0 0 300px; /* IE 10 */
  flex: 0 0 300px; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex-w-100-percent {
  -webkit-box-flex: 0 0 100%; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 0 0 100%; /* OLD - Firefox 19- */
  width: 100%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 0 0 100%; /* Chrome */
  -ms-flex: 0 0 100%; /* IE 10 */
  flex: 0 0 100%; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.flex-w-auto {
  -webkit-box-flex: 1 1 auto !important; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1 1 auto !important; /* OLD - Firefox 19- */
  width: auto !important; /* For old syntax, otherwise collapses. */
  -webkit-flex: 1 1 auto !important; /* Chrome */
  -ms-flex: 1 1 auto !important; /* IE 10 */
  flex: 1 1 auto !important; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

.d-block {
  display: block !important;
}

</style>
