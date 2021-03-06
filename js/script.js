//Milestone 1
//creare input che prende e fa partire una funzione che legge il valore v-model dell'input V
//la funzione passerà al get l'endpoint che leggerà le proprietà della query
//la funzione popolerà l'array che sarà ciclata e stampata col v-for
 

var app = new Vue({
    el: '#root',

    data: {
        movies: [],
        popularFilm: [],
        titolo: '',
        imgPath: 'https://image.tmdb.org/t/p/w200',
        imgPathTwo: 'https://image.tmdb.org/t/p/w400',
        language: 'en',
        HomeVisible: true,
        ricercaVisible: false
    },

    methods: {

        //Faccio partire la ricerca nelle api film e popolo l'array movies (che sarà stampato in single-list).
        cerca(titoloricercato) {

            this.HomeVisible = false;
            this.ricercaVisible = true;

            //Inizializzo ricerca film con axios
            axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=eeeef43555f0e5d1e4fb97ad6ba88a7f&query=' + titoloricercato)
            .then(response => {
                
                //Inserisco nell'array movies l'array di oggetti dei film preso dall'api
                this.movies = response.data.results; 
                

                //scansiono l'array di oggetti movies per gestire il flag della lingua
                this.movies.forEach((element) => {

                    console.log(element.original_language);

                    //Se la lingua da ricercare è nelle api allora aggiungo la proprietà flag: 1;
                    //Nell'html se la movie.flag è uguale a 1 (v-if movie.flag == 1) stamperà la bandiera
                    if ( this.language === element.original_language ) {

                        element.flag = 1;
                        console.log(element);

                    } else if (this.language != element.original_language) {
                        element.flag = 0;
                    }

                });
                
            })
            


            //Inizializzo ricerca serie tv con axios
            //Push nell'array movies anche le api delle serie tv
            axios
            .get('https://api.themoviedb.org/3/search/tv?api_key=eeeef43555f0e5d1e4fb97ad6ba88a7f&query=' + titoloricercato)
            .then(response => {

                this.movies.push(response.data.results);
                console.log(this.movies);

            })

        },

        //Milestone 2 Gestisco le stelle
        //Sull'icona della stella eseguo un v-for che ciclerà in base al ritultato ritornato dalla funzione stars()
        stars(stelle) {
            return Math.ceil(stelle/2);
        }
        
    },

    
    mounted() {

        //Inizializzo la ricerca api film popolari per stampare in home page
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=eeeef43555f0e5d1e4fb97ad6ba88a7f')
            .then(response => {

                this.popularFilm = response.data.results;
                console.log("popular movies", this.popularFilm);

            })
    }

})