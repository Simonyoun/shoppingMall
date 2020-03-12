<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot>
			</slot>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll' 
export default {
	name:'scroll',
	props:{
		pullUpLoad:{
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			scroll: null
		}
	},
	mounted() {
		 this.$nextTick(()=>{
			 this.scroll = new BScroll(this.$refs.wrapper,{
			 		  click: true,
					  pullUpLoad: this.pullUpLoad
			 })
			 this.scroll.on('pullingUp',()=>{
				  this.$emit('pullingUp')
			 })
			 this.scroll.on('scroll',(position)=>{
			 		this.$emit('probeType',position)
			 })
		 })
	}
} 
</script>

<style>
</style>
