<template>
  <h1>{{title}}</h1>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <button v-on:click="increase" >Increase</button>
  <button v-on:click="decrease" >decrease</button>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      // required: true
      validator(v) {
        return v >=0;
      }
    },
  },
  data() {
    return {
      counter: this.start,
    }
  },
  methods: {
    getSquareValue() {
      return this.counter*this.counter
    },
    increase() {
      ++this.counter
    },
    decrease() {
      --this.counter

    }
    
  },
  computed: {
    squareCounter(){
      return this.counter*this.counter
    }
  }
}
</script>

<style>
button {
  margin: 0 5px;
  background-color: greenyellow;
  border-radius: 5px;
  padding: 12px;
}
</style>