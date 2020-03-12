<template>
	<div class="login">
		<div class="logindiv1">
		     登录/注册
		</div>
		<div class="logindiv2">
			 <div>
				  <input type="text" placeholder="账号/手机" v-zhanghao/>
			 </div> 
			 <div >
				 
			 </div>
		</div>
		<div class="logindiv3">
			<div>
				<input type="password" placeholder="密码" v-mima/>
			</div>
			<div></div>
		</div>
		<div class="logindiv4" v-denglu>登录</div>
		<div class="logindiv5">
			 <div >
				  忘记密码
			 </div>
			 <div>
				  <router-link to="/register">用户注册</router-link>
			 </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login'
}
</script>

<style lang="scss" scoped="scoped">
	.login{
		width: 100%;
		height: calc(100% - 50px);
		background-color: #6699CC;
		overflow: hidden;
	}
	.logindiv1{
		width: 100%;
		height: 50px;
		padding-left: 20px;
		line-height: 50px;
		font-size: 26px;
		margin-top: 20px;
		color: #FFFFFF ;
	}
	.logindiv2,.logindiv3{
		width: 100%;
		margin-top: 20px;
		height: 50px;
		display: flex;
		background-color: #FFFFFF ;
		div:first-child{
			flex: 8;
			height: 50px;
			input{
				padding-left: 20px;
				height: 50px;
				width: 80%;
				background-color: #FFFFFF ;
				margin: 0px auto;
				border: none;
				-webkit-appearance: none; 
				-moz-appearance: none;
				 -o-appearance: none; 
				 appearance: none;
				 &:focus{
				 	outline: medium;
				 }
			}
		}
		div:last-child{
			flex: 2;
			height: 50px;
			background-color:#6699FF  ;
		}
	}
	.logindiv4{
		width: 96%;
		margin: 20px auto;
		border-radius: 10px;
		height: 50px;
		color:#FFFFFF;
		line-height: 50px;
		text-align: center;
		background-color: #66CCFF ;
	}
	.logindiv5{
		width: 100%;
		height: 40px;
		display: flex;
		div:first-child{
			flex: 1;
			height: 40px;
			padding-left: 10px;
			line-height: 40px;
			text-align: left;
		}
		div:last-child{
			height: 40px;
			text-align: right;
			line-height: 40px;
			padding-right: 10px;
			flex: 1;
		}
		a{
			color: #FFFFFF ;
			text-decoration: none;
		}
	}
</style>
