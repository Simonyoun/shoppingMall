<template>
	<div class="site">
		<div class="setsettingupinstalldiv">
			  <div @click="tuoityer">
				   退出
			  </div>
			  <div style="text-align: center;">
					地址
			  </div>
			  <div></div>
		</div>
		<div class="settingup">
			<mt-field label="姓名" placeholder="请输入姓名" v-model="mizhi"></mt-field>
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<div @click="ladert">
			     <mt-field label="所在地址" placeholder="所在地址" v-model="userdata" ></mt-field>
			</div>
			<mt-field label="详细地址" placeholder="详细地址" v-model="userdizhi"></mt-field>
			<div class="mtbutton">
		   	     <mt-button type="primary" size="large" class="diaochen" @click="daocheasd">保存</mt-button>	
			</div>
		</div>
		<mt-popup
		  v-model="popupVisible"
		  position="bottom"
		  style="width: 100%;"
		  >
		   <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
		</mt-popup>
	</div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
import provinces from '../../../public/jsop/provinces.json'
import pc from '../../../public/jsop/pc.json'
import pca from '../../../public/jsop/pca.json'
import router from '@/router'
import {getsitedatadata} from '@/axios/interfaceManagement.js'
export default {
	name: 'site',
	  data() {
	    return {
	      slots: [
	        {
	          flex: 1,
	          values: this.diaochaw(),
	          className: 'slot1',
	          textAlign: 'center'
	        }, 
			{
	          divider: true,
	          content: '-',
	          className: 'slot2'
	        }, 
			{
	          flex: 1,
	          values:this.pcdata("北京市"),
	          className: 'slot3',
	          textAlign: 'center'
	        },
			{
			  divider: true,
			  content: '-',
			  className: 'slot4'
			},
			{
			  flex: 1,
			  values: this.pcadata("北京市","北京市"),
			  className: 'slot5',
			  textAlign: 'center'
			}
	      ],
		  popupVisible: false,
		  mizhi:null,
		  userdata:null,
		  userdizhi:[],
		  regionInit: false,
		  phone:null
	    }
	},
	methods: {
		tuoityer() {
			 MessageBox.confirm('确定执行此操作?').then(action => {
					router.push({
							path: "/setsettingupinstall"
					})
			 }, e=>{
					   
			 })
		},
		onValuesChange(picker, values) {
			 this.userdata=values
		      if (this.regionInit) {
				 picker.setSlotValues(1, this.pcdata(values[0]))
				 picker.setSlotValues(2, this.pcadata(values[0], values[1]))
		      }else{
				  this.regionInit = true
			  }
		},
		ladert(){
			this.popupVisible = true
		},
		diaochaw(){
			let data = []
			provinces.forEach((item)=>{
				data.push(item.name)
			})
			return data
		},
		pcdata(name){
			let data = []
			let dgo = []
			let mhao
			data.push(pc)
			
			data.forEach((item)=>{
				dgo.push(item[name])
				dgo.forEach((age) =>{
					mhao = age
				})
			})
			return mhao
		},
		pcadata(name,uer){
			let data = []
			let dgo = []
			let mhao =[]
			let pcada 
			data.push(pca)
			data.forEach((item)=>{
				dgo.push(item[name])
				dgo.forEach((item)=>{
					mhao.push(item[uer])
					mhao.forEach((item)=>{
						pcada = item
					})
				})
			})
			return pcada
		},
		daocheasd(){
			getsitedatadata({
				user:localStorage.getItem("longon"),
				number: this.phone,
				address: this.userdata+this.userdizhi,
				name: this.mizhi
			}).then(res=>{
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
	}
}
</script>

<style lang="scss" scoped="scoped">
	  .site{
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
		  .settingup{
			  margin-top: 51px;
			  .mtbutton{
				  margin-top: 50px;
			  }
		  }
	  }
</style>
