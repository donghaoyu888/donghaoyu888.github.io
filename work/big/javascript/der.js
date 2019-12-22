Vue.component('no1', {
	template: "#no",
	props:['box_arr'],
	data() {
		return {
			arr:this.box_arr,
			index:0,
			tran: 'l'
		}
	},
	methods: {
		l() {
			this.tran = 'l'
			this.index++
			if(this.index>=this.arr.length){
				this.index=0
			}
		},
		
	},
	mounted() {
		var img = this.$refs.img[0]
		img.onload = () => {
			var h = this.$refs.img[0].offsetHeight
			for(var i = 0; i < this.$refs.img.length; i++) {
				this.$refs.img[i].style.height = h + 'px'
			}
			this.$el.style.height = h + 'px'
		}
	}
})

new Vue({
	el: "#box_2",
	data:{
		arr: [
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODBkMjY5NjYzNDJmNTM1ZjdkYmEwMjY2OTNmMmQ5ZjcucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODBkMjY5NjYzNDJmNTM1ZjdkYmEwMjY2OTNmMmQ5ZjcucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNzY5MDExMmQ0MjIzN2Y5YTg0OWVjNjc0N2NmOGMxYWYucG5n.png',
			]
	}
})