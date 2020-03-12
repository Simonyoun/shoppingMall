<template>
     <div class="bpage">
		 <div class="bpagediv">
			 <div class="div1" v-for="v in this.$store.state.classdata" :key="v.id" @click="bpagediv">
				  <img :src="v.src"/>
				  <span>{{v.user}}</span>
			 </div>
		 </div>
		 <div class="bpagediv1"></div>
	 </div>
</template>

<script>
import {Toast} from 'mint-ui'
import Scroll from "@/components/scroll/scroll.vue"
export default {
  name: 'Bpage',
  components: {
  	Scroll
  },
  created(){
  	  this.$store.dispatch('classdata',"家居")
  },
  methods: {
  	bpagediv() {
  		Toast({
  			message:"功能未开放",
  			duration: 2000
  		})
  	}
  }
}
</script>

<style lang="scss" scoped="scoped">
  .bpage{
	  width: 100%;
	  .bpagediv{
		  width: 100%;
		  .div1{
		  	width: 48%;
		    height: 180px;
            margin: 1% 1%;
		  	border: 1px solid #000000;
			box-sizing: border-box;
		  	float: left;
			img{
				width: 100%;
				height: 150px;
			}
			span{
				display: inline-block;
				width: 100%;
				text-align: center;
				height: 30px;
			}
		  }
	  }
	  .bpagediv1{
		  width: 100%;
		  height: 55px;
		  clear: left;
	  }

  }
</style>
