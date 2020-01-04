var routes = [
	{
	  path:'/',
	  component:{template:'#no1'}
	},
	{ 
	  path:'/no2',
	  component:{template:'#no2'},
	  children:[
	    {path:'/',component:{template:''}},
	     {path:'no1',component:{template:''}}
	  ]
	},
	{
	  path:'/no3',
	  component:{template:'#no3'}
	}
]

var router = new VueRouter({
	routes
})
new Vue({
	el: "#box",
	router,
	mounted(){
	
	},
	watch:{
		'$route.path'(a,b){
			console.log(a,b)
		}
	}
})