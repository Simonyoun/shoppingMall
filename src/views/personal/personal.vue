<template>
	<div class="personal">
		 <div class="setsettingupinstalldiv">
			  <div @click="tuoity">
				   退出
			  </div>
			  <div style="text-align: center;">
					个人信息
			  </div>
			  <div></div>
		 </div>
		 <div class="geru">
				 <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
				 <mt-cell title="性别" >
						<mt-switch v-model="value" >男 / 女</mt-switch>  
				 </mt-cell>
                 <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>	
				 <mt-button type="primary" size="large" class="diaochen" @click="diaochen">保存</mt-button>
		 </div>
	</div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
import {getmodifythedata} from '@/axios/interfaceManagement.js'
import router from '@/router'
export default {
	name: 'personal',
	inject:['reload'],
	data() {
		return {
			username: this.$store.state.userinfo.name,
			value:this.$store.state.userinfo.gender,
			birthday:this.$store.state.userinfo.birthday
		}
	},
	created(){
		this.$store.dispatch('userinfo',localStorage.getItem("longon"))
		 
	},
	methods: {
		tuoity() {
			 MessageBox.confirm('确定执行此操作?').then(action => {
					router.push({
							path: "/setsettingupinstall"
					})
			 }, e=>{
					   
			 })
		},
		baoceng () {
					 this.popupVisible = true
		},
		diaochen(){
			let v
			if (this.value) {
				v ="女"
			} else{
				v ="男"
			}
			getmodifythedata({
				user: localStorage.getItem("longon"),
				name: this.username,
				gender: v,
				birthday: this.birthday
			}).then(res =>{
				  if (res.data) {
					Toast({
						message:"保存成功",
						iconClass: 'el-icon-circle-check',
						duration: 800
					});
					router.push({
							path: "/setsettingupinstall"
					})
				  }else{
					Toast({
						message:"保存失败",
						iconClass: 'el-icon-circle-close',
						duration: 800
					});
				  }
				  
			 })
			 this.reload()
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped="scoped">
	.personal{
		width: 100%;
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
    .geru{
		margin-top: 51px;
		.diaochen{
			margin-top: 50px;
		}
	}

	}
</style>
