<template>
	<div class="register">
		<div class="registerdiv1">
			  <router-link to="/login">返回</router-link>
		</div>
		<div class="registerdiv2">注册<sub>register</sub></div>
		<div class="registerdiv3">
			 <input type="text" placeholder="手机号" v-uset />
		</div>
		<div class="registerdiv4">
			 <input type="password" placeholder="密码" v-pass1 />
		</div>
		<div class="registerdiv5">
			 <input type="password" placeholder="确认密码" v-pass2 />
		</div>
		<div class="registerdiv6" v-registe>注册</div>
		<div class="registerdiv7" v-hint></div>
	</div>
</template>

<script>
export default {
	name: 'register'
}
</script>

<style lang="scss" scoped="scoped">
	.registerdiv1{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 14px;
		background-color:#3399CC  ;
		a{
			padding-left: 15px;
			color: #FFFFFF ;
			text-decoration: none;
		}
	}
	.registerdiv2{
		margin-top: 10px;
		font-size: 22px;
		color: #3399CC ;
		padding-left: 30px;
		margin-bottom: 20px;
	}
	.registerdiv3,.registerdiv4,.registerdiv5{
		width: 80%;
		margin: 10px auto;
		height: 50px;
		border: 1px #000000 solid;
		input{
			width: 90%;
			height: 50px;
			border: none;
			padding-left: 15px;
			background-color: #FFFFFF;
			&:focus{
				outline: medium;
			}
		}
	}
	.registerdiv6{
		width: 80%;
		margin: 10px auto;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #3399CC;
		border: 1px #3399CC solid;
	}
	.registerdiv7{
		width: 80%;
		margin: 10px auto;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color:#FF0000;
		display: none;
		border: 1px  #FF0000 solid;
	}
</style>
