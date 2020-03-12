// var starX, starY, moveEndx, moveEndY, X, Y;
// var index = 0;
// const mima = {}
// mima.install = function(Vue,options){
// 	Vue.directive('directiveName', {
// 		bind(el, binding, vnode) {
// 			el.addEventListener('touchstart', 
// 			function (e) {
// 		         e.preventDefault();
//  	             starX = e.touches[0].pageX;
// 	 	         // starY = e.touches[0].pageY;
//             },true);
// 			el.addEventListener('touchmove',
// 			function (e) {
// 				  e.preventDefault();
// 				  moveEndx = e.changedTouches[0].pageX;
// 				  moveEndY = e.changedTouches[0].pageY;
// 				  X = moveEndx - starX;
// 				  Y = moveEndY - starY;
// 				  if (X > 0) {
// 					  if (el.getBoundingClientRect().left>=0) {
// 					  	 index =0 ;
// 					  }
// 					  el.style.marginLeft= (index++) +'%';
// 				  } else if (X < 0) {
// 					  if (el.getBoundingClientRect().left<= -(el.clientWidth*0.5)) {
// 					  	 index =0 ;
// 					  }
// 					  el.style.marginLeft= (index--) +'%';
// 				 }
// 			},true)
// 		}
// 	});
// }
import { Toast } from 'mint-ui'
import {Theverification,registeruser,setlogincheck,getuserinfodata} from '@/axios/interfaceManagement.js'
import router from '@/router'
//注册
export function registe (Vue,option) {
	   let e,da,user,password;
	   let bolls = false;
	   let gong = false;
	 	Vue.directive('uset', {
	 		bind(el, binding, vnode) {
	 			el.addEventListener('blur', 
	 			function () {
					if (el.value.length>0) {
						if (!(/0?(13|14|15|18)[0-9]{9}/.test(el.value))) {
                          e.style.display="block";
						  e.innerHTML = "请输入11数手机号";						
						}else{
							Theverification(el.value).then(res =>{
								  if(res.data){
									  e.style.display="block";
									  e.innerHTML = "该手机已被注册";	
									  Dataportalnodas(false);
								  }else{
									  userdata(el.value);
									  Dataportalnodas(true);
									  e.style.display="none"; 
								  }
							})
							e.style.display="none";
						}
					}else{
                         e.style.display="block";
						 e.innerHTML = "账号不能为空";
					}
	             });
	 		}
	 	}); 
		Vue.directive('pass1', {
			bind(el, binding, vnode) {
				el.addEventListener('blur', 
				function () {
					if(bolls){
						if (el.value.length<6 || el.value.length>15) {
						      e.style.display="block";
						      e.innerHTML = "请输入一个6-15位的密码";
						}else{
							if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/.test(el.value))) {
								e.style.display="block";
								e.innerHTML = "请输入一个包含字母的密码";
							}else{
								e.style.display="none";
								Dataportalno(el.value)
							}
						}
					}else{
						e.style.display="block";
						e.innerHTML = "请输入手机号";	

					}
		         });
			}
		});
		 Vue.directive('pass2', {
		 	bind(el, binding, vnode) {
		 		el.addEventListener('blur', 
		 		function () {
					if(bolls){
						if (da == el.value) {
							e.style.display="none";
							Dataportalnodastyuo(true);
							passworddata(el.value);
						}else{
							e.style.display="block";
							e.innerHTML = "两次密码不一致";
							Dataportalnodastyuo(false)
						}
					}else{
						e.style.display="block";
						e.innerHTML = "请输入密码";
					}
		          });
		 	}
		 }); 
		 Vue.directive('registe', {
		 	bind(el, binding, vnode) {
					el.addEventListener('click',
					function  () {
						if (bolls&&gong) {
							Theverification(user).then(res =>{
								  if(res.data){
									  e.style.display="block";
									  e.innerHTML = "请勿重复操作";
								  }else{
									  getuserinfodata(user).then(res =>{
									  })
				                      registeruser(user,password).then(res =>{
				                      	  if (res.data) {
											  Toast({
											    message: '注册成功',
											    iconClass: 'el-icon-circle-check',
												duration: 800
											  });
											  router.push({
												  path: "/login"
											  })
											  
				                      	  }else{
				                      		  Toast({
												  message:"注册失败",
												  iconClass: 'el-icon-circle-close',
												  duration: 800
											  });
				                      	  }
				                      })
								  }
							})
						}else{
							e.style.display="block";
							e.innerHTML = "请检查是否填错";
						}
					})
		 	}
		 });
		 Vue.directive('hint', {
		 	bind(el, binding, vnode) {
				Dataportal(el)
		 	}
		 });
		function  Dataportal(data) {    //数据传送门
			  e = data;  
		}
		function  Dataportalno(data) {    //数据传送门
			  da = data;  
		}
        function  Dataportalnodas(data) {    //数据传送门
        	  bolls = data;  
        }
		function  Dataportalnodastyuo(data) {    //数据传送门
			  gong = data;  
		}
		function  userdata(data) {    //数据传送门
			  user = data;  
		}
		function  passworddata(data) {    //数据传送门
			  password = data;  
		}
}


//登录
export function Thelogin (Vue,option){
	let e,user,password;
	Vue.directive('zhanghao', {
		bind(el, binding, vnode) {
			el.addEventListener('blur', 
			function () {
				 Theverification(el.value).then(res =>{
				 	  if(res.data){
						  e.style.backgroundColor = "#66CCFF";
						  e.innerHTML = "登录";
						  getuser(el.value)
				 	  }else{
				 		  e.style.backgroundColor = "#CC0000";
				 		  e.innerHTML = "账号不存在";
				 	  }
				 })
	         });
		}
	}); 
	Vue.directive('mima', {
		bind(el, binding, vnode) {
			el.addEventListener('blur',
			function () {
                  getpassword(el.value);
			 });
		}
	}); 
	Vue.directive('denglu', {
		bind(el, binding, vnode) {
			Dataportal(el)
			el.addEventListener('click', 
			function () {
				 setlogincheck(user,password).then(res=>{
					  if (res.data) {
						 localStorage.setItem("longon",res.data[0].user);
						 router.push({
						 		path: "/wodi"
						 })
					  }else{
						  Toast({
						  		message:"登录失败",
						  		iconClass: 'el-icon-circle-close',
						  		duration: 800
						  });
					  }
				 })
	         });
		}
	});
	 function  Dataportal(data) {    //数据传送门
	 	  e = data;  
	 }
	 function  getuser(data) {    //数据传送门
	 	  user = data;  
	 }
	 function  getpassword(data) {    //数据传送门
	 	  password = data;  
	 }
}
