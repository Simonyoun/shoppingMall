<template>
	<div class="orderprocessing">
		<div class="orderprocessingdiv1">
			   <div @click="atioon('/obligation')">
				   待付款
			   </div>
			   <div @click="atioon('/receiving')">
				   待收货
			   </div>
			   <div @click="atioon('/salesreturn')">
				   退换/售后
			   </div>
			   <div @click="atioon('/clothingorders')">
				   全部订单
			   </div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import router from '@/router'
export default {
	nane: "orderprocessing",
	methods: {
		atioon(v) {
			router.push({
				path: v
			})
		}
	},
}
</script>

<style lang="scss" scoped="scoped">
	.orderprocessingdiv1{
		width: 100%;
		height: 50px;
		display: flex;
		div{
			flex: 1;
			height: 50px;
			border-left: 1px #000000 solid;
			border-bottom: #000000 1px solid;
			line-height: 50px;
			text-align: center;
			font-size: 12px;
		}
		div:nth-child(1){
			border-left: none;
		}
	}

</style>
