<template>
	<div class="pinglunlie">
		 <div class="fanghuao">
			  <span @click="tianjiu()">返回</span>  评论
		 </div>
		 <Scroll class="pinglunlieScroll">
			  <div class="pinglunlieScrolldiv" v-for="v in this.$store.state.pingnumder" :key="v.id">
				   <div class="Scrolldiv-1">
					    <div>
							  <img :src="v.src" />
						</div>
						<div>
							 <div>{{v.orsernumber}} <span>{{v.time}}</span></div>
							 <div>{{v.name}}</div>
						</div>
				   </div>
				   <mt-cell title="服务评分">
				         <el-rate
				           v-model="v.servicescore"
				           disabled
				           show-score
				           text-color="#ff9900"
				           score-template="{value}">
				         </el-rate>
				   </mt-cell>
				   <mt-cell title="快递评分">
				      <el-rate
				        v-model="v.expressscore"
				        disabled
				        show-score
				        text-color="#ff9900"
				        score-template="{value}">
				      </el-rate>
				   </mt-cell>
				   <div class="Scrolldiv-2">
					    <div>{{v.neirong}}</div>
				   </div>
				   
			  </div>
		 </Scroll>
	</div>
</template>

<script>
import Scroll from "@/components/scroll/scroll.vue"
export default{
	 naem: 'pinglunlie',
	 components: {
	 	Scroll
	 },
	 data() {
	 	return {
	 	}
	 },
	 created(){
		  this.$store.dispatch('pingnumddsfdser',this.$route.query.ordernumber)
	 },
	 methods: {
	 	tianjiu() {
			this.$router.back(-1)
	 	}
	 },
}
</script>

<style lang="scss" scoped="scoped">
	.pinglunlie{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		.pinglunlieScroll{
			height: calc(100% - 100px);
			.pinglunlieScrolldiv{
				width: 96%;
				margin: 5px auto;
				background-color: #66CCFF;
				.Scrolldiv-1{
					width: 100%;
					height: 60px;
					display: flex;
					font-size: 12px;
					div:first-child{
						flex: 1;
						img{
							width: 100%;
							height: 100%;
						}
					}
					div:last-child{
						flex: 3;
						div{
							height: 30px;
							padding-left: 5px;
							line-height: 30px;
							span{
								margin-left: 50px;
							}
						}
					}
				}
				.Scrolldiv-2{
					width: 100%;
					font-size: 12px;
					div{
						width: 96%;
						margin: 0px auto;
						word-break: break-all;
						line-height: 25px;
					}
					
				}
			}
		}
		.fanghuao{
			width: 100%;
			height: 40px;
			background-color: #66CCFF;
			line-height: 40px;
			font-size: 12px;
			text-align: center;
			color: #EEEEEE;
			z-index: 100000;
			position: relative;
			span{
				position: absolute;
				left: 15px;
			}
		}
	}
</style>
