<template>
  <!-- <Counter title="Contadores" :start="11"/> -->
  <Indecition></Indecition>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Indecition from './components/Indecition.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    Indecition
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
