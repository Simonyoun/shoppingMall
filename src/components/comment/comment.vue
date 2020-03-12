<template>
	<div class="comment">
		 <mt-header title="评论">
		   <router-link to="/receiving" slot="left">
		     <mt-button icon="back">返回</mt-button>
		   </router-link>
		 </mt-header>
		<mt-cell title="服务评分">
		        <el-rate
		          v-model="value"
		          :colors="colors">
		        </el-rate>
		</mt-cell>
		<mt-cell title="快递评分">
		        <el-rate
		          v-model="value1"
		          :colors="colors">
		        </el-rate>
		</mt-cell>
		<mt-field placeholder="意见建议" type="textarea" rows="4" v-model="introduction"></mt-field>
		<mt-button size="large" @click="commentClick">提交</mt-button>
	</div>
</template>

<script>
import {Toast} from 'mint-ui'
import {getnumder,getpinglen} from '@/axios/interfaceManagement.js'
export default {
	 name: 'comment',
	 data() {
	 	return {
	 		value: 0,
			value1:0 ,
			colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
			introduction:null
	 	}
	 },
	 created(){
		 this.$store.dispatch('userinfo',localStorage.getItem("longon"))  
	 },
	 methods: {
	 	commentClick() {
			getnumder(this.$route.query.numder.numder).then(ret=>{
				   let dat  = {ordernumber:this.$route.query.numder.orsernumber,numder:ret.data[0].ordernumber,
				              name:this.$store.state.userinfo.name,src:this.$store.state.userinfo.src,servicescore:this.value,expressscore:this.value1,neirong:this.introduction}
				   getpinglen(dat).then(ret=>{
					    if (ret.data) {
					    	Toast({
					    	  message: '评论成功',
					    	  iconClass: 'el-icon-circle-check',
					    		duration: 800
					    	});
							this.$router.push({
				                   path: "/"
			                })
					    }
				   })
			})
	 	}
	 }
}
</script>

<style lang="scss" scoped="scoped">
	.comment{
		width: 100%;
		height: 100vh;
		.commentdiv{
			width: 100%;
		}
	}
</style>
