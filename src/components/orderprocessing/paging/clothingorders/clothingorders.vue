<template>
	<div class="clothingorders">
		<Scroll class="clothingordersScroll">
			<div class="Scrolldiv" v-for="v in this.$store.state.allorders" :key="v.id">
				 <div class="div-1">
					  <span>
						   订单号：
					  </span>
					  <span>{{v.orsernumber}}</span>
				 </div>
				 <div class="div-2">
					 <div>
						 <img :src="v.src" />
					 </div>
					 <div>
						 <h4>{{v.number}}</h4>
					 </div>
				 </div>
			</div>
		</Scroll>
	</div>
</template>

<script>
import {modifyorder} from '@/axios/interfaceManagement.js'
import Scroll from "@/components/scroll/scroll.vue"
export default {
	name: 'clothingorders',
	components: {
		Scroll
	},
	created() {
	}
}
</script>

<style lang="scss" scoped="scoped">
	.clothingorders{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		.clothingordersScroll{
			width: 100%;
			height: calc(100% - 100px);
			.Scrolldiv{
				width: 96%;
				height: 180px;
				font-size: 12px;
				background-color: #FF9999 ;
				margin: 5px auto;
				color:#FFFFFF;
				.div-1{
					width: 100%;
					height: 40px;
					span{
						line-height: 40px;
						padding-left: 15px;
					}
				}
				.div-2{
					width: 100%;
					height: 100px;
					display: flex;
					div:first-child{
						flex: 1;
						height: 100px;
						img{
							width: 100%;
							height: 100%;
						}
					}
					div:last-child{
						flex: 2;
						height: 100px;
						h4{
							text-align: center;
						}
					}
				}
			}
		}
	}
</style>
