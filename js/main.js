// let input = document.getElementById('input73');
// let btn = document.getElementById('btn-submit37');
// let divRisposta = document.getElementById('risposta');


Vue.createApp({
    data(){
        return{
            message: 'hello word',
            url : './img/LOL.jpg',
            url2 : '',
            show : false,
            nome : 'ff'
        }
    },
    methods: {
       saluta: function(){
            return this.message + this.nome;        
       },
       random: function(min,max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
       },
       randomUrl: function(src){
            return src = `https://picsum.photos/id/${this.random(1,100)}/200/300`;
       }
    }
}).mount('#risposta')