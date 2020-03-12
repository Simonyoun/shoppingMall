<template>
	<div class="wrapper" ref="wrapperop">
		<div class="content">

		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll' 
export default {
	name:'scroll',
	data() {
		return {
			scroll: null
		}
	},
	mounted() {
	  this.scroll = new BScroll(this.$refs.wrapperop,{
		  click: true,
		  scrollX:true,
		  scrollX:false
	  })
	  console.log(this.scroll);
	}
} 
</script>

<style>
</style>
