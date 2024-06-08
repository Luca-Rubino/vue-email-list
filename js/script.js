console.log('vue-email-list')

const { createApp } = Vue

createApp({
    data(){
        return{
            emailList: [''],
            generata: false
        };
    },
    methods: {
        getData(){
            // funzione in un ciclo while per generare 10 email
            let i=0;
            while (i < 10) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    console.log(`${response.data.response}`);
                    this.emailList.push(response.data.response);
                });
                i++
            };
        }
    },
    // Uso Options: Lifecycle created per generare le email solo dopo che sono state create
    created() {
        this.getData();
    },
}).mount('#app')



axios.get('https://flynn.boolean.careers/exercises/api/random/mail')