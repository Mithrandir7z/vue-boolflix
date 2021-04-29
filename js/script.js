//Milestone 1
//creare input che prende e fa partire una funzione che legge il valore v-model dell'input V
//la funzione passerà al get l'endpoint che leggerà le proprietà della query
//la funzione popolerà l'array che sarà ciclata e stampata col v-for

var app = new Vue({
    el: '#root',

    data: {
        mioArray: [],
        titolo: ''
    },

    methods: {
        
    },

    mounted() {
        cerca = () => {

            axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=eeeef43555f0e5d1e4fb97ad6ba88a7f&language=it-IT&query=' + this.titolo)
            .then(response => {

                this.mioArray = response.data.results;
                console.log(this.mioArray);
            })
        } 
    }

  })