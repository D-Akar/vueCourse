const app = Vue.createApp({
  data(){
    return {
      myName: "Derin",
      myAge: "22",
      randomImage: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    }
  },
  methods: {
    futureAge() {
      return this.myAge + 5;
    },
    randomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');