Vue.component('space', {
	template: "<div v-on:click='callSquare'>{{display}}</div>",
	methods: {
		callSquare: function(){
			if(this.display===''){
				// this is "I have not been clicked yet"
				
				this.display='X';
				this.$emit('new');
			}
			else{
				// "I have already been clicked"
				
				this.$emit('repeat');
			}
		}
	},
	props:['markers', 'turn'],
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
  		alert('clicked a new space');
  	}, 
  	repeatClick: function(){
  		alert('already clicked');
  	}
  }  



});