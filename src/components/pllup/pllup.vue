<template>
	 <div class="pllup">
		  <slot></slot>
	 </div>
</template>

<script>
export default {
	name:'pllup',
	data() {
		return {
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
	.pllup{
			width: 100%;
			height: 600px;
			position: absolute;
			bottom: 50px;
			background-color: #FFFFFF;
			z-index: 1000;
	}
</style>
