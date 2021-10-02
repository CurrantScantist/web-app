<template>
  <div class="topbar-wrapper">
    <div class="topbar">
      <div class="logo-button">
        <router-link to="/">
          <img src="@/assets/temp-logo.svg" alt="Logo" height="50"
        /></router-link>
      </div>
      <div class="app-name">Scantist</div>
      <div class="app-subname">Health Model</div>
      <nav class="nav-wrapper" v-bind:class="{ active: isActive }">
        <ul class="nav">
          <li class="nav-button">
            <router-link
              class="nav-link"
              v-for="route in routes"
              :key="route.path"
              :to="route.path"
              v-on:click="closeMenu"
            >
              <span>{{ capitalizeFirstLetter(route.name) }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="menu-button" v-on:click="collapseMenu">
        <img src="@/assets/menu-button.svg" alt="Menu button" height="20" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topbar {
  background-color: white;
  display: flex;
  width: 100%;
  border-bottom: 1px solid;
  border-color: $scantist-border-grey;
}

.app-name,
.app-subname {
  color: black;
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-name {
  font-weight: 800;
  padding: 5px;
}

.app-subname {
  font-weight: 300;
}

.logo-button {
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  padding: 3px;
  margin-left: 1rem;
}

.menu-button {
  display: none;
}

span {
  font-weight: 500;
}

.nav-wrapper {
  margin-left: auto;
  margin-right: 1rem;

  .nav {
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
}

.nav-link {
  font-weight: $weight-light;
  display: inline-block;
  text-decoration: none;
  padding: 1.5rem 2rem 1.5rem 2rem;
  font-size: 16px;

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: #17cf97;
  }
}

@media only screen and (max-width: 768px) {
  .nav-wrapper {
    margin-top: 4rem;
    position: fixed;
    right: -100%;
    display: flex;
    flex-direction: column;
    transition: 0.2s;
  }

  .nav-wrapper.active {
    right: 0;
  }

  .menu-button {
    display: block;
    cursor: pointer;

    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1rem;
    margin-left: auto;

    padding: 1rem;
  }
}
</style>

<script>
import navRoutes from "@/router/nav-routes.js";

export default {
  name: "Topbar",
  data() {
    return {
      routes: navRoutes,
      isActive: false,
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    collapseMenu() {
      this.isActive = !this.isActive;
    },
    closeMenu() {
      this.isActive = false;
    },
  },
};
</script>
