<template>
		<div class="setsettingupinstall">
				 <div class="setsettingupinstalldiv">
					  <div @click="tuoi">
						   退出
					  </div>
					  <div style="text-align: center;">
						    设置
					  </div>
					  <div></div>
				 </div>
				 <div class="installdiv">
				     <mt-cell title="个人信息" label="设置信息" to="/personal" is-link></mt-cell>	 
					 <mt-cell title="地址" label="设置地址" to="/site" is-link></mt-cell>	
					 <mt-cell title="密码" label="修改密码" to="/xiugai" is-link></mt-cell>	
				 </div>
		</div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import router from '@/router'
export default {
	name: 'setsettingupinstall',
	components: {
	},
	methods: {
		 tuoi() {
			router.push({
					path: "/wodi"
			})
		 }
		 
	}
}
</script>

<style lang="scss" scoped="scoped">
	 .setsettingupinstall{
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
			 .installdiv{
				 margin-top: 51px;
			 }

	 }
</style>
