<template>
  <h1>Indecition</h1>

  <img v-if="image" :src="image" alt="bg">

  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" placeholder="Hazme un pregunta" v-model="question">
    <p>recuerda terminar con un signo de interrogacion (?)</p>

    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>
        {{answer}}
      </h1>
    </div>
  </div>
</template>

<script>
const url = 'https://yesno.wtf/api';
export default {
  data() {
    return {
      question: '',
      answer: null,
      image: 'https://via.placeholder.com/250',
      isValidQuestion: false,
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Pensando...';

      const resp = await fetch(url).then(r =>r.json());
      const {answer, image} = resp
      this.answer = answer==='yes' ? 'Si' : 'No';
      this.image = image
    }
  },  
  watch: {
    question(value, oldValue) {
      this.isValidQuestion = false;
      if(!value.includes('?')) return
      
      this.isValidQuestion = true;
      this.getAnswer();
      
    }
  }
}
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>