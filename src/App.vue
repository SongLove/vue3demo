<template>
  <div id="app">
    <head-tab/>
    <router-view/>
    <footer-tab/>
  </div>
</template>

<script>
import HeadTab from './components/headTab.vue'
import footerTab from './components/footerTab.vue'


export default {
  name: 'app',
  components: {
    HeadTab,
    footerTab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ff0000;
}
</style>
