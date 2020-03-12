<template>
	<div class="introduce">
		 <div class="introduceDiv1">
			 <router-link to="/productsIntroduction">
					  <div>
						   商品介绍
					  </div>
			  </router-link>
			  <router-link to="/specificationParameter">
					  <div>
						   规格参数
					  </div>
			  </router-link>
			  <router-link to="/after-salePuarantee">
					  <div>
						   售后保障
					  </div>
			  </router-link>
		 </div>
		 <router-view :orders="orders"></router-view>
	</div>
</template>

<script>
export default {
	name: 'introduce',
	props: ["orders"]
}
</script>

<style lang="scss" scoped="scoped">
	.introduce{
		border: 1px solid #CCCCCC ;
		box-sizing: border-box;
		width: 100%;
		a{
			color: #000000;
		}
		.introduceDiv1{
			width: 100%;
			height: 50px;
			div{
				width: 33%;
				margin: 0px auto;
				height: 50px;
				border-right: 1px solid #CCCCCC ;
				line-height: 50px;
				text-align: center;
				float: left;
				&:hover{
					background-color: #CCCCCC ;
				}
			}
		    div:nth-child(3){
				border-right: none;
			}
		}
	}
</style>
