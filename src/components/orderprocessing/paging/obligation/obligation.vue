<template>
	<div class="obligation">
		<Scroll class="obligationScroll">
			<div class="Scrolldiv" v-for="v in this.$store.state.orderinquire" :key="v.id">
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
				 <div class="div-3">
					 <div></div>
					 <div></div>
					 <div @click="shanchudidan(v.orsernumber)">
						 取消订单
					 </div>
					 <div @click="zhifu(v.orsernumber)">
						 付款
					 </div>
				 </div>
			</div>
		</Scroll>
	</div>
</template>

<script>
import {modifyorder,DELETEorder} from '@/axios/interfaceManagement.js'
import Scroll from "@/components/scroll/scroll.vue"
import {Toast} from 'mint-ui'
export default {
	name: 'obligation',
	inject:['reload'],
	components: {
		Scroll
	},
	created() {
		this.$store.dispatch('getorderinquire',localStorage.getItem("longon"))
	},methods: {
		zhifu(v) {
			modifyorder({
				user: v,
				pass: 1
			}).then(ret=>{
				if(ret.data){
					Toast({
					  message: '支付成功',
					  iconClass: 'el-icon-circle-check',
						duration: 800
					});
					this.reload()
				}else{
					Toast({
					  message: '支付失败',
					  iconClass: 'el-icon-circle-close',
					  duration: 800
					});
				}
			})
		},
		shanchudidan(v){
			DELETEorder({
				user: v
			}).then(ret=>{
				if(ret.data){
					Toast({
					  message: '取消成功',
					  iconClass: 'el-icon-circle-check',
						duration: 800
					});
					this.reload()
				}else{
					Toast({
					  message: '取消失败',
					  iconClass: 'el-icon-circle-close',
					  duration: 800
					});
				}
			})
		}
	},
}
</script>

<style lang="scss" scoped="scoped">
	.obligation{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		.obligationScroll{
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
				.div-3{
					width: 100%;
					height: 40px;
					display: flex;
					div{
						flex: 1;
						height: 40px;
					}
				}
			}
		}
	}
</style>
