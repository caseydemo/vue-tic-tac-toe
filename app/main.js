Vue.component('space', {
	template: "<div v-on:click='callSquare'>{{display}}</div>",
	methods: {
		callSquare: function(){
			if(this.display===''){
				// this is "I have not been clicked yet"
				
				this.display=this.symbol;
				this.$emit('new');
			}
			else{
				// "I have already been clicked"
				
				this.$emit('repeat');
			}
		}
	},
	props:['symbol'],
	data: function(){
		return{
			display:''
			
		}
		
	}

});

var app = new Vue({

  el: '#app',
  data: {
  	markers: ['X', 'O'],
  	turn: 0

  },
  methods: {
  	newClick: function(){
  		console.log('clicked a new space');
  		this.turn++;
  		this.checkForWin();
  		this.checkForDraw();
  	}, 
  	repeatClick: function(){
  		console.log('already clicked');
  	},
  	checkForWin: function(){
  		alert('check for win');

  	},
  	checkForDraw: function() {
		alert('check for draw');  		

  	}
  }  



});