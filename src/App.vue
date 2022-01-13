<template>
  <div id="app">
    <NavBar user="Vikrant negi" />
    <div class="viewArea">
      <router-view/>
    </div>
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
  border-radius: 32px;
  color: #FFFFFF;
  width: 1100px;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.viewArea{
  width: 90%;
}
</style>
