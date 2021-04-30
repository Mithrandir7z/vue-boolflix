//Milestone 1
//creare input che prende e fa partire una funzione che legge il valore v-model dell'input V
//la funzione passerà al get l'endpoint che leggerà le proprietà della query
//la funzione popolerà l'array che sarà ciclata e stampata col v-for

//fare una bandiera e metterci un v-if, dentro cerca() cercare se la variabile flag: inghilterra col 
//valore di una stringa en è inclusa in movies[], se si allora this.flag = 1; e poi col v-if stampare la
//bandiera se è visibile. 

var app = new Vue({
    el: '#root',

    data: {
        movies: [],
        titolo: '',
        imgPath: 'https://image.tmdb.org/t/p/w200',
        language: 'cs',
    },

    methods: {

        //Faccio partire la ricerca nelle api e popolo l'array movies.
        cerca(titoloricercato) {

            axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=eeeef43555f0e5d1e4fb97ad6ba88a7f&query=' + titoloricercato)
            .then(response => {
      
                this.movies = response.data.results; 
                
                // console.log(this.movies);

                this.movies.forEach((element) => {

                    console.log(element.original_language);

                    //Se la lingua da ricercare è nelle api allora la variabile flag = 1;
                    //Nell'html se la variabile flag è uguale a 1 (v-if flag == 1) stamperà la bandiera
                    if ( this.language === element.original_language ) {

                        // console.log(element.original_title);
                        //obj.key3 = "value3";
                        
                        element.flag = 1;
                        // console.log(movies);
                        console.log(element);


                    } else if (this.language != element.original_language) {
                        element.flag = 1;
                    }

                });
                
            })
            
            // axios
            // .get('https://api.themoviedb.org/3/search/tv?api_key=eeeef43555f0e5d1e4fb97ad6ba88a7f&query=' + titoloricercato)
            // .then(response => {

            //     this.movies.push(response.data.results);
            //     console.log(this.movies);

                

            // })

        },
        
    },

    mounted() {
        
    }

  })