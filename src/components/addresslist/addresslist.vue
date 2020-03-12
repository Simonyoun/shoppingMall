<template>
	<div class="addresslist">
		<Scroll class="AlipayScroll">
			 <div class="AlipayScrolldiv"  v-for="v in this.$store.state.sitedataa" :key="v.id">
				  <p class="AlipayScrolldivp" @click="selecttada(v)">
					  <span>{{v.name}}</span>
					  <span>{{v.user}}</span>
				  </p>
				  <div class="AlipayScrolldivpdiv" @click="selecttada(v)">
					   {{v.address}}
				  </div>
				  <div class="addresslistdiv" @click="chancudta(v.id)">删除</div>
			 </div>	
		 </Scroll>
		 <div class="filida" @click="tiajia">
			  <svg t="1583160577395" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2305" width="32" height="32"><path d="M515.2 987.2c-267.2 0-486.4-217.6-486.4-486.4C30.4 233.6 248 16 515.2 16s486.4 217.6 486.4 486.4c0 267.2-217.6 484.8-486.4 484.8z m0-908.8C283.2 78.4 92.8 268.8 92.8 502.4s190.4 422.4 422.4 422.4 422.4-190.4 422.4-422.4c1.6-233.6-188.8-424-422.4-424z" fill="#43484D" p-id="2306"></path><path d="M521.6 737.6c-17.6 0-32-14.4-32-32V310.4c0-17.6 14.4-32 32-32s32 14.4 32 32v395.2c0 17.6-14.4 32-32 32z" fill="#229BFF" p-id="2307"></path><path d="M713.6 545.6H331.2c-17.6 0-32-14.4-32-32s14.4-32 32-32h382.4c17.6 0 32 14.4 32 32s-14.4 32-32 32z" fill="#229BFF" p-id="2308"></path></svg>
		 </div>
	</div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
import router from '@/router'
import Scroll from "@/components/scroll/scroll.vue"
import {DELETEsitedata} from '@/axios/interfaceManagement.js'
export default {
	name: "addresslist",
	inject:['reload'],
	components: {
		Scroll
	},
	created(){
		 this.$store.dispatch('sitedataa',localStorage.getItem("longon"))  
	},
	methods: {
		selecttada(v) {
			this.$store.state.dizhi = v
			router.push({
				path: "/Alipay"
			})
		},
		chancudta(v){
			let data =[]
			data.push(v)
			 MessageBox.confirm('确定执行此操作?').then(action => {
				  DELETEsitedata(data).then(ret=>{
					   if (ret.data) {
					   	    Toast({
					   	    	message:"删除成功",
					   	    	iconClass: 'el-icon-circle-check',
					   	    	duration: 800
					   	    });
							this.reload()
					   }else{
						   Toast({
						   	message:"删除失败",
						   	iconClass: 'el-icon-circle-close',
						   	duration: 800
						   });
					   }
				  })
			 }, e=>{
			 					   
			 })
		},
		tiajia(){
			router.push({
				path: "/site"
			})
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
	.addresslist{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		.AlipayScroll{
			height: calc(100% - 60px);
		}
		.AlipayScrolldiv{
			width: 98%;
			margin: 5px auto;
			height: 130px;
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
			.addresslistdiv{
				width: 100%;
				height: 30px;
				background-color: #CCCCFF ;
				color: #FFFFFF;
				text-align: center;
				line-height: 30px;
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
		.filida{
			width: 60px;
			height: 60px;
			position: fixed;
			z-index: 10000;
			bottom:85px;
			right: 40px;
			border-radius: 50px;
			svg{
				width: 100%;
				height: 100%;
		    }
		}
	}
</style>
