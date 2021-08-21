<template>
  <el-col class="nav-wrapper">
    <div class="logo-wrapper">
      <img src="@/assets/temp-logo.svg" alt="Logo" height="150" width="100" />
    </div>
    <el-menu class="nav" mode="vertical">
      <router-link
        class="nav-link"
        tag="button"
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
      >
        <el-menu-item class="nav-button">
          <i :class="route.meta.icon"></i>
          <span>{{ capitalizeFirstLetter(route.name) }}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </el-col>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  max-width: 20%;

  .logo-wrapper {
    margin-bottom: 2.5rem;
  }

  .nav {
    border-right: 0;

    .nav-link {
      text-decoration: none;

      &:hover,
      &:focus,
      &:active {
        text-decoration: none;
      }

      .el-menu-item.is-active {
        color: grey;
      }

      .nav-button {
        /* border-l-4 border-white text-left font-medium; */
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;

        &:hover {
          background-color: lightgrey;
        }

        i {
          color: black;
        }
      }
    }
  }

  .router-link-active {
    .nav-button {
      background-color: lightgrey;
      border-right: 4px solid grey;
    }
  }
}
</style>

<script>
import navRoutes from "@/router/nav-routes.js";

export default {
  name: "Sidebar",
  data() {
    return {
      routes: navRoutes,
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>
