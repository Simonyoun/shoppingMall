import {request} from '@/axios/axios.js'
import { Indicator,Toast} from 'mint-ui'
export function gettingdata(){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"1"
	  	}
	 },function (instace) {
	 	instace.interceptors.request.use(config=>{
	 			  Indicator.open({
	 			    text: '加载中...',
	 			    spinnerType: 'fading-circle'
	 			  })
	 			  return config
	 	},err=>{
	 			  Toast({
	 			  		message:"加载失败",
	 			  		iconClass: 'el-icon-circle-close',
	 			  		duration: 800
	 			  });
	 			  return Promise.reject(err)
	 	})
	 	instace.interceptors.response.use(response=>{
	 			    Indicator.close();
	 			return response 
	 	},error=>{
	 			return Promise.reject(error) 
	 	})
	 })
}
export function getdetailpage(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"2",
			  orders:odj
	  	}
	 },function (instace){
		 
	 })
}
export function commoditydetails(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"3",
			  orders:odj
	  	}
	 },function (instace){
		 
	 })
}
export function Theverification(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"4",
			  user:odj
	  	}
	 },function (instace){
		 
	 })
}
export function registeruser(odj,pss){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"5",
			  user:odj,
			  pass:pss
	  	}
	 },function (instace){
		 
	 })
}
export function setlogincheck(odj,pss){
	  return request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"6",
			  user:odj,
			  mima:pss
	  	}
	 },function (instace){
		 instace.interceptors.request.use(config=>{
		 		  Indicator.open({
		 		    text: '加载中...',
		 		    spinnerType: 'fading-circle'
		 		  })
		 		  return config
		 },err=>{
		 		  Toast({
		 		  		message:"加载失败",
		 		  		iconClass: 'el-icon-circle-close',
		 		  		duration: 800
		 		  });
		 		  return Promise.reject(err)
		 })
		 instace.interceptors.response.use(response=>{
		 		  Indicator.close();
		 		return response 
		 },error=>{
		 		return Promise.reject(error) 
		 })
	 })
}
export function getfengleidata(){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"7"
	  	}
	 },function (instace){
		 
	 })
}
export function getclassdata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"8",
			  name:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getshangpingdata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"9",
			  orders:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getProductsdata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"10",
			  orders:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getmealdata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"11",
			  orders:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getxiangdangddata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"12",
			  user:odj.user,
			  name:odj.name,
			  src:odj.src,
			  typ:odj.typ,
			  price:odj.price,
			  quantiy:odj.quantiy,
			  numder:odj.numder
	  	}
	 },function (instace){
		 
	 })
}
export function getcheckthedata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"13",
			  user:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getDELETEdata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"14",
			  user:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getuserinfodata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"15",
			  user:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getmodifythedata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"16",
			  user:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getxingxidata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"17",
			  user:odj
	  	}
	 },function (instace){
		 
	 })
}
export function getsitedatadata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"18",
			  user:odj
	  	}
	 },function (instace){
		 
	 })
}
export function UPDATEUERT(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
	  		  key:"19",
			  user:odj
	  	}
	 },function (instace){
		 
	 })
}
export function IMGdata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/upload_file.php',
	  	data: odj,
		headers: {'Content-Type': 'multipart/form-data'}
	 },function (instace){
	 })
}
export function getsitedataa(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"20",
			user:odj
		}
	 },function (instace){
	 })
}
export function DELETEsitedata(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"21",
			user:odj
		}
	 },function (instace){
	 })
}
export function getorderform(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"22",
			user:odj
		}
	 },function (instace){
	 })
}
export function orderinquire(user){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"23",
			user:user,
			state:0
			
		}
	 },function (instace){
	 })
}
export function waitforreceiving(user){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"23",
			user:user,
			state:1
			
		}
	 },function (instace){
	 })
}
export function salesreturn(user){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"23",
			user:user,
			state:2
			
		}
	 },function (instace){
	 })
}
export function allorders(user){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"23",
			user:user,
			state:3
			
		}
	 },function (instace){
	 })
}
export function modifyorder(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"24",
			user:odj
			
		}
	 },function (instace){
	 })
}
export function DELETEorder(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"25",
			user:odj
		}
	 },function (instace){
	 })
}
export function getpinglen(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"26",
			user:odj
		}
	 },function (instace){
	 })
}
export function getnumder(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"27",
			user:odj
		}
	 },function (instace){
	 })
}
export function getpingnumder(odj){
	 return  request({
	  	method: 'post',
	  	url: '/logincheck.php',
	  	data: {
			key:"28",
			user:odj
		}
	 },function (instace){
	 })
}