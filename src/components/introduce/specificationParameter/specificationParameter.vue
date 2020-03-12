<template>
	<div class="specificationParameter">
		 <div class="S-div1">
			  <div>
				   <hr />
			  </div>
			  <div>
				   商品参数
			  </div>
			  <div>
				    <hr />
			  </div>
		 </div>
		 <div class="S-div2" v-for="v in this.$store.state.commoditydetailsdata" :key="v.id">
			  <div class="S-div2Div">
				   <div>商品编号</div>
				   <div>
					   {{v.ordernumber}}
				   </div>
			  </div>
			  <div class="S-div2Div">
				  主体
			  </div>
			  <div class="S-div2Div">
			  		<div>品牌</div>
			  		<div>{{v.brand}}</div>
			  </div>
			  <div class="S-div2Div">
			  		<div>颜色</div>
			  		<div>{{v.colour}}</div>
			  </div>
			  <div class="S-div2Div">
			  		<div>外部材质</div>
			  		<div>{{v.extrnal}}</div>
			  </div>
			  <div class="S-div2Div">
			  		<div>内里材质</div>
			  		<div>{{v.lnternal}}</div>
			  </div>
			  <div class="S-div2Div">
				  规格参数
			  </div>
			  <div class="S-div2Div">
			  		<div>尺寸（寸数</div>
			  		<div>{{v.sizs}}</div>
			  </div>
			  <div class="S-div2Div">
			  		<div>容积（L)</div>
			  		<div>{{v.volume}}</div>
			  </div>
			  <div class="S-div2Div">
			  		<div>产品净尺寸（cm）</div>
			  		<div>{{v.clea}}</div>
			  </div>
			  <div class="S-div2Div">
			  		<div>产品净重量（kg）</div>
			  		<div>{{v.net}}</div>
			  </div>
			  <div class="S-div2Div">
			  		<div>承重量（kg）</div>
			  		<div>{{v.capacity}}</div>
			  </div>
			  <div class="S-div2Div">
				  特性
			  </div>
			  <div class="S-div2Div">
			  		<div>可否折叠</div>
			  		<div>{{v.folding}}</div>
			  </div>
			  <div class="S-div2Div" style="border-bottom: #000000 1px solid;">
			  		<div>是否可背负</div>
			  		<div>{{v.sad}}</div>
			  </div>
		 </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			datasd:  null
		}
	},
	props: ["orders"],
	created(){
		this.$store.dispatch('commoditydeta',this.orders)
	}
}
</script>

<style lang="scss" scoped="scoped">
	.specificationParameter{
		width: 100%;
		.S-div1{
			width: 100%;
			height: 50px;
			display: flex;
			div{
				flex: 1;
				text-align: center;
				line-height: 50px;
				font-size: 15px;
				color: #CCCCCC ;
				hr{
					width: 80%;
					margin: 25px auto;  
				}
			}
		}
		.S-div2{
			width: 94%;
			margin: 0px auto;
			.S-div2Div{
				width: 100%;
				height: 50px;
				border: 1px #CCCCCC  solid;
				box-sizing: border-box;
				display: flex;
				border-bottom: none;
				line-height: 50px;
				font-size: 12px;
				padding-left: 2px;
				div:nth-child(1){
					flex: 1;
					border-right: 1px #CCCCCC  solid;
					text-align: center;
				}
				div:nth-child(2){
					flex: 2;
					text-align: center;
				}
			}
		}
	}
</style>
