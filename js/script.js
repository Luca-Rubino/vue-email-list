console.log('vue-email-list')

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')




axios.get('https://flynn.boolean.careers/exercises/api/random/mail')