import Vue from 'vue'
import Router from 'vue-router'
import no1 from './routes/index.vue'
import one from './routes/one.vue'
import two from './routes/two.vue'
import three from './routes/three.vue'

Vue.use(Router)

var routes = [
	{
	  path:'/',
	  name:'index',
	  component:no1
	},
	{
	  path:'/one',
	  name:'one',
	  component:one
	},
	{
	  path:'/two',
	  name:'two',
	  component:two
	},
	{
	  path:'/three',
	  name:'three',
	  component:three
	}
]

export default new Router({
	routes
})
