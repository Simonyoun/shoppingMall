<template>
	<div class="receiving">
		<Scroll class="receivingScroll">
			<div class="Scrolldiv" v-for="v in this.$store.state.waitforreceiving" :key="v.id">
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
					 <div @click="chargeback(v.orsernumber)" >
						 退单
					 </div>
					 <div @click="pay(v)">
						 确认收货
					 </div>
				 </div>
			</div>
		</Scroll>
	</div>
</template>

<script>
import router from '@/router'
import {Toast} from 'mint-ui'
import {modifyorder} from '@/axios/interfaceManagement.js'
import Scroll from "@/components/scroll/scroll.vue"
export default {
	name: 'obligation',
	inject:['reload'],
	components: {
		Scroll
	},
	created() {
		 this.$store.dispatch('getwaitforreceiving',localStorage.getItem("longon"))
	},methods: {
		chargeback(v){
			modifyorder({
				user: v,
				pass: 2
			}).then(ret=>{
				if(ret.data){
					Toast({
					  message: '退单成功',
					  iconClass: 'el-icon-circle-check',
						duration: 800
					});
					this.reload()
				}else{
					Toast({
					  message: '退单失败',
					  iconClass: 'el-icon-circle-close',
					  duration: 800
					});
				}
			})
		},
		pay(v){
			modifyorder({
				user: v.orsernumber,
				pass: 3
			}).then(ret=>{
				if(ret.data){
					Toast({
					  message: '收货成功',
					  iconClass: 'el-icon-circle-check',
						duration: 800
					});
					this.reload()
				}else{
					Toast({
					  message: '收货失败',
					  iconClass: 'el-icon-circle-close',
					  duration: 800
					});
				}
			})
			router.push({
				 path: "/comment",
				 query:{
					 numder:v
				 }
			})
			
		}
	},
}
</script>

<style lang="scss" scoped="scoped">
	.receiving{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		.receivingScroll{
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

