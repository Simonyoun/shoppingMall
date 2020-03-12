<template>
    <div class="message">
		 <div class="messageDiv">
			  <div @click="quit">
				  <svg t="1582182638707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1127" width="32" height="32"><path d="M550.4 409H324.8V279.3L64 511.9l260.8 232.8v-122h225.5V409h0.1zM960 826.3c-0.4 42.8-37.2 74.3-79.5 74.4H462.7c-42.3-0.1-79.3-31.6-79.5-74.4V650.9h45.2v175.3c0 14.4 13.8 29.1 34.3 29.2h417.8c20.6-0.1 34.3-14.7 34.3-29.2V197.7c-0.1-14.5-13.8-29.1-34.3-29.2H462.7c-20.6 0.1-34.3 14.9-34.3 29.2v185h-45.2v-185c0.4-42.9 37.2-74.3 79.5-74.4h417.8c42.3 0.1 79.3 31.6 79.5 74.4v628.6z" p-id="1128"></path></svg>
			  </div>
			  <div @click="setsetting">
				  <svg t="1582182902143" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2209" width="32" height="32"><path d="M548.3 958.3h-72.5c-55.4 0-100.5-45.1-100.5-100.5V848c0-20.7-10.7-39.2-28.6-49.6-17.9-10.3-39.3-10.3-57.2 0l-8.4 4.9c-23.2 13.4-50.3 17-76.2 10-25.9-6.9-47.6-23.6-61-46.8l-36.2-62.8c-13.4-23.2-17-50.3-10-76.2 6.9-25.9 23.6-47.6 46.8-61l8.4-4.9c17.9-10.3 28.6-28.9 28.6-49.6 0-20.7-10.7-39.2-28.6-49.6l-8.4-4.9c-23.2-13.4-39.9-35.1-46.8-61-6.9-25.9-3.4-53 10-76.2l36.2-62.8c12.6-21.9 32.9-38.1 57-45.6 24-7.5 49.7-5.8 72.3 4.8 12.5 5.8 17.9 20.7 12.1 33.2-5.8 12.5-20.7 17.9-33.2 12.1-23.5-10.9-52-1.9-64.9 20.6L151 345.4c-6.7 11.7-8.5 25.3-5 38.3 3.5 13 11.8 23.9 23.5 30.6l8.4 4.9c33.6 19.4 53.6 54.1 53.6 92.9 0 38.8-20 73.5-53.6 92.9l-8.4 4.9c-11.7 6.7-20 17.6-23.5 30.6s-1.7 26.6 5 38.3l36.2 62.8c6.7 11.7 17.6 20 30.6 23.5s26.6 1.7 38.3-5l8.4-4.9c33.6-19.4 73.6-19.4 107.2 0 33.6 19.4 53.6 54.1 53.6 92.9v9.8c0 27.8 22.6 50.5 50.5 50.5h72.5c27.8 0 50.5-22.6 50.5-50.5V848c0-38.8 20-73.5 53.6-92.9 33.6-19.4 73.6-19.4 107.2 0l8.4 4.9c11.7 6.7 25.3 8.5 38.3 5 13-3.5 23.9-11.8 30.6-23.5l36.2-62.8c13.9-24.1 5.6-55-18.5-69l-8.4-4.9c-33.6-19.4-53.6-54.1-53.6-92.9 0-38.8 20-73.5 53.6-92.9l8.4-4.9c11.7-6.7 20-17.6 23.5-30.6s1.7-26.6-5-38.3L837 282.7c-13.9-24.1-44.8-32.4-69-18.5l-8.4 4.9c-33.6 19.4-73.7 19.4-107.2 0-33.6-19.4-53.6-54.1-53.6-92.9v-9.8c0-27.8-22.6-50.5-50.5-50.5h-72.5c-27.8 0-50.5 22.6-50.5 50.5v9.8c0 21.8-6.4 42.6-18.4 60.2-7.8 11.4-23.3 14.4-34.7 6.6-11.4-7.8-14.4-23.3-6.6-34.7 6.4-9.3 9.7-20.4 9.7-32.1v-9.8c0-55.4 45.1-100.5 100.5-100.5h72.5c55.4 0 100.5 45.1 100.5 100.5v9.8c0 20.7 10.7 39.2 28.6 49.6 17.9 10.3 39.3 10.3 57.2 0l8.4-4.9c48-27.7 109.6-11.2 137.3 36.8l36.2 62.8c13.4 23.2 17 50.3 10 76.2-6.9 25.9-23.6 47.6-46.8 61l-8.4 4.9c-17.9 10.3-28.6 28.9-28.6 49.6 0 20.7 10.7 39.2 28.6 49.6l8.4 4.9c23.2 13.4 39.9 35.1 46.8 61 6.9 25.9 3.4 53-10 76.2l-36.2 62.8c-13.4 23.2-35.1 39.9-61 46.8-25.9 6.9-53 3.4-76.2-10l-8.4-4.9c-17.9-10.3-39.3-10.3-57.2 0-17.9 10.3-28.6 28.9-28.6 49.6v9.8c-0.1 55.2-45.1 100.3-100.6 100.3z" p-id="2210"></path><path d="M512.1 682.5c-93.9 0-170.3-76.4-170.3-170.3s76.4-170.3 170.3-170.3 170.3 76.4 170.3 170.3S606 682.5 512.1 682.5z m0-290.7c-66.3 0-120.3 54-120.3 120.3s54 120.3 120.3 120.3 120.3-54 120.3-120.3-54-120.3-120.3-120.3z" p-id="2211"></path></svg>
			  </div>
		 </div>
		 <div class="messageDiv1">
			 <div @click="sheetVis">
				  <img :src="this.$store.state.userinfo.src">
			 </div>
			 <div>
				  <p>
					  名称：<span>{{this.$store.state.userinfo.name}}</span>
				  </p>
				  <p>
					  账号：<span>{{deg}}</span>
				  </p>
			 </div>
		 </div>
		 <mt-actionsheet
		   :actions="actions"
		   v-model="sheetVisible">
		 </mt-actionsheet>
		  <input type="file" accept="image/*" name="file" style="display: none;" ref= "file" @change="UploadFile($event)" />
	</div>
</template>

<script>
import {Toast} from 'mint-ui'
import { MessageBox } from 'mint-ui'
import {IMGdata} from '@/axios/interfaceManagement.js'
import router from '@/router'
export default {
  name: 'message',
  data() {
  	return {
  		sheetVisible: false,
		actions: [
			{
				 name: '从相册中选择',
				 method: this.getLibrary
			}
		],
		deg:localStorage.getItem("longon")
  	}
  },
  created(){
	 this.$store.dispatch('userinfo',localStorage.getItem("longon"))  
  },
  methods: {
  	quit() {
       MessageBox.confirm('确定执行此操作?').then(action => {
		   localStorage.removeItem("longon")
		   router.push({
		   		path: "/login"
		   })
       }, e=>{
		   
	   })
  	},
	setsetting() {
		router.push({
				path: "/setsettingupinstall"
		})
	},
	sheetVis(){
		this.sheetVisible = true
	},
	getLibrary(){
		 this.$refs.file.click() 
	},
	UploadFile(e){
		 let file = e.target.files
		 let msg = new FormData()
		 msg.append('longon',localStorage.getItem("longon")) 
		 msg.append('file',file[0]) 
		 IMGdata(msg).then(ret=>{
			  if (ret.data) {
			  	   Toast({
			  	     message: '上传成功',
			  	   	 duration: 800
			  	   });
			  } else{
			  	 Toast({
			  	    message: '上传失败',
			  	 	duration: 800
			  	 });
			  }
		 })
	}
  }
}
</script>

<style lang="scss" scoped="scoped">
  .message{
    width: 100%;
    height: 250px;
	background-image: url("http://pic1.win4000.com/wallpaper/e/599be9ecdedb4.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	.messageDiv{
		width: 100%;
		height: 50px;
		div:first-child{
			width: 40px;
			height: 40px;
			float: left;
			svg{
				width: 100%;
				height: 100%;
			}
		}
		div:last-child{
			width: 40px;
			height: 40px;
			float: right;
			svg{
				width: 100%;
				height: 100%;
			}
		}
	}
	.messageDiv1{
		width: 100%;
		height: 200px;
		div:first-child{
			width: 120px;
			height: 120px;
			border-radius: 60px;
			overflow: hidden;
			margin: 0px auto;
			img{
				width: 100%;
				height: 100%;
			}
		}
		div:last-child{
			width: 120px;
			height: 80px;
			margin: 0px auto;
			font-size: 12px;
			color: #FFFFFF ;
			p{
			  width: 100%;
			  height: 40px;
			  text-align: left;
			  line-height: 40px;
			}
		}
	}
  }
</style>
