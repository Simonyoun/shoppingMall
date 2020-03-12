<template>
	<div class="xiugai">
		<div class="setsettingupinstalldiv">
			  <div @click="ti">
				   退出
			  </div>
			  <div style="text-align: center;">
					 修改密码
			  </div>
			  <div></div>
		</div>
		<div class="xiugaidiv">
			<mt-field  placeholder="旧密码" type="password" v-model="password"></mt-field>
			<mt-field placeholder="新密码" type="password" v-model="passwords"></mt-field>
			<mt-button type="default" size="large" class="diaochen" @click="xiugai" plain>确认修改</mt-button>
		</div>
	</div>
</template>

<script>
import {setlogincheck,UPDATEUERT} from '@/axios/interfaceManagement.js'
import router from '@/router'
import { Toast } from 'mint-ui'
export default {
	name:'xiugai',
	data() {
		return {
			password: null,
			passwords: null
		}
	},
	methods: {
		 ti() {
			router.push({
				path: "/setsettingupinstall"
			})
		 },
		 xiugai(){
			 console.log(this.password );
			 setlogincheck(
				 localStorage.getItem("longon"),
				 this.password 
			 ).then(res=>{
				  if (!res.data) {
					  Toast({
					  	message:"旧密码错误",
					  	iconClass: 'el-icon-circle-close',
					  	duration: 800
					  });
				  }else{
					  UPDATEUERT({
						  user: localStorage.getItem("longon"),
						  pass: this.passwords
					  }).then(res=>{
						  if(res.data){
							   Toast({
							   	message:"密码成功",
							   	iconClass: 'el-icon-circle-check',
							   	duration: 800
							   });
							    localStorage.removeItem("longon")
							   router.push({
							   		path: "/login"
							   })
						  }else{
							 Toast({
							 	message:"密码失败",
							 	iconClass: 'el-icon-circle-close',
							 	duration: 800
							 }); 
						  }
					  })
				  }
			 })
		 }
	}
}
</script>

<style lang="scss" scoped="scoped">
	 .xiugai{
		 width: 100%;
		 height: 100vh;
		 overflow: hidden;
		 position: relative;
		 .setsettingupinstalldiv{
			 position: fixed;
			 width: 100%;
			 height: 50px;
			 z-index: 1000;
			 box-sizing: border-box;
			 border: 1px solid #CCCCCC ;
			 background-color: #FFFFFF ;
			 display: flex;
			 div{
				 flex: 1;
				 line-height: 50px;
				 padding-left: 6px;
				 font-size: 14px;
				 color:#333333;
			 }
		 }
		 .xiugaidiv{
			 margin-top: 50px;
		 }
	 }
</style>
