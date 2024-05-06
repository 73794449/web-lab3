<template>
  <div id="app">
    <NavbarComponent :active=currentRouteName() />
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
import NavbarComponent from './views/NavBarView.vue'
export default {
  name: 'App',
  components: {
    NavbarComponent
  },
  methods: {
    currentRouteName()
    {
      return this.$route.name;
    }
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 100;
}
</style>
