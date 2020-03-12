<template>
		  <div class="wrapper">
			  <p>分类</p>
			  <ul class="content" v-for="v in this.$store.state.fengleidatas" :key="v.id">
					<li @click="namedata(v.fenlei)" ref="sser">{{v.fenlei}}</li>
			  </ul>
		  </div>
</template>

<script> 
export default {
  name: 'Apage',
  created(){
  	  this.$store.dispatch('fengleidata')
  },
  methods: {
  	namedata(data) {
  	   	 this.$store.dispatch('classdata',data)
		 this.$refs.sser.style.backgroundColor = "#000000"
  	}
  }
}
</script>

<style lang="scss" scoped="scoped">
  .wrapper{
	border: 1px solid #CCCCCC ;
	.content{
		text-align: center;
		list-style: none;
		p{
			height: 50px;
			text-align: center;
			color: #FF6600;
			font-size: 12px;
			box-sizing: border-box;
			margin-top: 2px;
			line-height: 50px;
			border-bottom: 1px solid #CCCCCC;
		}
		li{
			height: 50px;
			font-size: 12px;
			box-sizing: border-box;
			margin-top: 2px;
			line-height: 50px;
			border-bottom: 1px solid #CCCCCC;
	
		}
	}
  }
</style>
