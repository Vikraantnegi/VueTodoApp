<template>
  <div id="app">
    <NavBar user="Vikrant negi" />
    <app-view>
      <router-view/>
    </app-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>


<style>
#app {
  font-family: 'Poppins', sans-serif;
  background: #141419;
  color: #FFFFFF;
  width: 1100px;
  height: 80vh;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
