<template>
  <div id="app">
    <img alt="RBC logo" src="./assets/logo.png">
    <landing msg="RBC Helpdesk"/>
  </div>
</template>

<script>
import landing from './components/landing.vue'

export default {
  name: 'app',
  components: {
    landing,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
  html{
    overflow-y: auto;
  }
</style>