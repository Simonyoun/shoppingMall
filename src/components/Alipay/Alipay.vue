<template>
	<div class="Alipay">
		 <Scroll class="AlipayScroll">
			     <div class="AlipayScrolldiv"  @click="Alipayclick">
					  <p class="AlipayScrolldivp">
						  <span>{{this.$store.state.dizhi.name}}</span>
						  <span>{{this.$store.state.dizhi.user}}</span>
					  </p>
					  <div class="AlipayScrolldivpdiv">
						   {{this.$store.state.dizhi.address}}
					  </div>
				 </div>
				 <div class="AlipayScrolldivsd" v-for="v in this.$store.state.Orderdata" :key="v.id">
					     <div>
							  <img :src="v.src" />
						 </div>
					     <div>
							  <div>
								   <span>{{v.name}}</span>
							  </div>
							  <div>
								   <span>价格: {{v.price}}</span>
								   <span>数量: {{v.quantiy}}</span>
							  </div>
						 </div>
				 </div>
		 </Scroll>
		 <div class="AlipayScrolldivfgh" @click="fukan">
			  付款
		 </div>
	</div>
</template>

<script>
import {getorderform} from '@/axios/interfaceManagement.js'
import { MessageBox } from 'mint-ui'
import router from '@/router'
import {Toast} from 'mint-ui'
import Scroll from "@/components/scroll/scroll.vue"
export default {
	name: 'Alipay',
	data() {
		return {
			data: value
		}
	},
	components: {
		Scroll
	},
	created(){
		this.$store.dispatch('sitedataa',localStorage.getItem("longon"))  
	},
	methods: {
		Alipayclick() {
			router.push({
				path: "/addresslist"
			})
		},
		fukan(){
			 if(this.$store.state.Orderdata.length >0 ){
				 let ds = [];
				 MessageBox.confirm('确定执行此操作?').then(action => {
				 	for (let i = 0; i < this.$store.state.Orderdata.length; i++) {
				 		this.$store.state.Orderdata[i].address = this.$store.state.dizhi.id
				 		this.$store.state.Orderdata[i].state = 1
						ds.push(this.$store.state.Orderdata[i].id)
				 	}
				 	getorderform(this.$store.state.Orderdata).then(ret=>{
				 		 if (ret.data) {
							 this.$store.dispatch("DELETEdata",ds)
				 		 	 router.push({
				 		 	 	path: "/receiving"
				 		 	 })
				 		 }else{
				 			 
				 		 }
				 	})
				 }, e=>{
				 	for (let i = 0; i < this.$store.state.Orderdata.length; i++) {
				 		this.$store.state.Orderdata[i].address = this.$store.state.dizhi.id
				 		this.$store.state.Orderdata[i].state = 0 
						ds.push(this.$store.state.Orderdata[i].id)
				 	}
				 	getorderform(this.$store.state.Orderdata).then(ret=>{
				 		 if (ret.data) {
							 this.$store.dispatch("DELETEdata",ds)
				 		 	 router.push({
				 		 	 	path: "/obligation"
				 		 	 })
				 		 }else{
				 		 }
				 	})  
				 })
			 }else{
				  Toast({
				  		message:"请选商品",
				  		duration: 800
				  });
			 }
		}
	},
	created(){

	}
}
</script>

<style lang="scss" scoped="scoped">
	.Alipay{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		.AlipayScroll{
			height: calc(100% - 60px);
			.AlipayScrolldiv{
				width: 98%;
				margin: 5px auto;
				height: 100px;
				font-size: 13px;
				background-color:#FF9999 ;
				border-radius: 5px;
				overflow: hidden;
				color: #FFFFFF;
				position: relative;
				.AlipayScrolldivp{
					padding-top: 5px;
					text-align: center;
					span{
						padding-left: 10px;
					}
				}
				.AlipayScrolldivpdiv{
					width: 70%;
					margin: 5px auto;
					height: 70px;
					
				}
				&:after{
					content: "";
					background: url("../../../public/img/jiantou.png") no-repeat;
					display: block;
					width: 38px;
					height: 38px;
					position: absolute;
					right: 10px;
					top: 30px;
				}
			}
			.AlipayScrolldivsd{
				width: 98%;
				margin: 5px auto;
				height: 150px;
				background-color: #FF9900;
				border-radius: 5px;
				display: flex;
				overflow: hidden;
				div:nth-child(1){
					flex: 1;
					height: 150px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				div:nth-child(2){
					flex: 1;
					height: 150px;
					color: #FFFFFF ;
					font-size: 12px;
					div:first-child{
						width: 100%;
						height: 80px;
						line-height: 30px;
						text-align: center;
					}
				}
				div:last-child{
					text-align: center;
					span{
						padding-left: 5px;
					}
				}
			}
		}
		.AlipayScrolldivfgh{
			width: 100px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			position: fixed;
			bottom: 80px;
			right: 50px;
			border-radius: 10px;
			background-color: #FF6666 ;
			color: #FFFFFF ;
		}
	}
</style>
