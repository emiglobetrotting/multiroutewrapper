<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  selectedMenuItem: string | null
}>();

const links = [
    {
      path: "/dashboard",
      icon: "dashboard.png",
      selected: "DASHBOARD",
      name: "Dashboard",
    },
    {
      path: "/add-new-requests",
      icon: "add-new-requests.png",
      selected: "ADD-NEW-REQUESTS",
      name: "Add new requests",
    },
    {
      path: "/settings",
      icon: "settings.png",
      selected: "SETTINGS",
      name: "Settings",
    },
    {
      path: "/generate-reports",
      icon: "generate-reports.png",
      selected: "GENERATE-REPORTS",
      name: "Generate reports",
    },
    {
      path: "/kpi-measurement",
      icon: "kpi-measurement.png",
      selected: "KPI-MEASUREMENT",
      name: "KPI measurement",
    },
  ];

</script>

<template>
  <nav style="padding: 6px" class="d-block">
    <ul
      class="flex-box w-100-percent flex-direction-column h-auto list-style-none m-0 p-0"
    >
      <li v-for="(link, index) in links" :key="index" class="flex-w-100-percent">
        <router-link
          :class="[selectedMenuItem == link.selected ? 'link-selected' : '']"
          :to="link.path"
        >
          <div class="flex-box flex-direction-row flex-nowrap align-items-center w-100-percent">
            <div class="flex-w-30-px">
              <img
                :src="'/src/assets/icons/' + link.icon"
                style="width: 30px; height: 30px; vertical-align: middle"
                alt="Image"
              />
            </div>
            <div style="margin-left: 0.5em" class="flex-w-auto">
              {{ link.name }}
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

.list-style-none {
  list-style: none;
}

li > a {
  padding: 0.5rem;
  color: rgb(221, 231, 201);
  margin: 0;
  text-decoration: none;
  display: block;
  width: 100%;
  font-size: 0.9em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  background-color: #3e4852;
  border-radius: 0.5rem;
}

li > a:hover {
  background-color: #043b23;
  color: #fff;
}

li > a.link-selected:hover {
  background-color: #043b23;
  color: #fff;
}

li > a.link-selected,
li > a.link-selected:active,
li > a.link-selected:visited {
  background-color: #043b23;
  color: #fff;
}

li {
  padding-top: 7px;
}

li:last-child {
  padding-bottom: 7px;
}
</style>