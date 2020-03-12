import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'mint-ui'
import router from '@/router'
import {gettingdata,getdetailpage,commoditydetails,getfengleidata,getclassdata,getshangpingdata,
getProductsdata,getmealdata,getxiangdangddata,getcheckthedata,getDELETEdata,getmodifythedata,getxingxidata,getsitedataa,orderinquire,waitforreceiving,salesreturn,allorders,getpingnumder} from '@/axios/interfaceManagement.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  HomePagedata:[],
	  detailpagedata:[],
	  commoditydetailsdata:[],
	  fengleidatas:[],
	  classdata:[],
	  shangpingdata:{
		  price:null,
		  name:null,
		  placeof:null,
		  ordernumber:null
	  },
	  Productsdata:[],
	  upboxrot: false,
	  mealdata:[],
	  meal:{
		  name: null,
		  src:null,
		  price:null,
		  numder:null
	  },
	  xiangdangddata:[],
	  checkthedata:[],
	  index:[],
	  userinfo:{
		  name: null,
		  gender:null,
		  birthday:null,
		  src:null
	  },
	  price:[],
	  sitedataa:[],
	  dizhi: null,
	  Orderdata: null,
	  orderinquire:[],
	  waitforreceiving:[],
	  salesreturn:[],
	  allorders:[],
	  pingnumder:[],
	  firstcomment:{
		  naem: null,
		  src:null ,
		  time:null,
		  neirong:null,
		  show: false
	  },
	  display: false
  },
  mutations: {
	  Home(state,obj){
		  state.HomePagedata = obj
	  },
	  detail(state,obj){
	  	  state.detailpagedata = obj
	  },
	  commodity(state,obj){
		  state.commoditydetailsdata = obj
	  },
	  setfengleidata(state,obj){
	  		  state.fengleidatas = obj
	  },
	  setclassdata(state,obj){
		  state.classdata = obj
	  },
	  setshangpingdata(state,obj){
		  state.shangpingdata.price =obj[0].price
		  state.shangpingdata.name =obj[0].name
		  state.shangpingdata.placeof =obj[0].placeof
		  state.shangpingdata.ordernumber =obj[0].ordernumber
	  },
	  setProductsdata(state,obj){
		  state.Productsdata = obj
	  },
	  setupboxrotdata(state,obj){
	  	  state.upboxrot = obj
	  },
	  setmealdata(state,obj){
		  state.mealdata = obj
		  state.meal.name = obj[0].name
		  state.meal.src = obj[0].src
		  state.meal.price = obj[0].price
		  state.meal.numder = obj[0].numder
	  },
	  setmealda(state,obj){
			  state.meal.name = obj.data
			  state.meal.src = obj.src
			  state.meal.price = obj.price
	  },
	  setxiangdangddata(state,obj){
		  state.xiangdangddata = obj
	  },
	  setcheckthedata(state,obj){
		  state.checkthedata = obj
		  state.price = new Object()
		  for(var i=0;i<state.checkthedata.length;i++){
			  state.index[i] = obj[i].id
			  state.price[obj[i].id] = obj[i].price
		  }
		  if (state.checkthedata.length>0) {
		  	 state.display = true
		  }else{
		  	state.display = false
		  }
	  },
	  setuserinfo(state,obj){
		  state.userinfo.name = obj[0].name
		  if (obj[0].src != "") {
		  	  state.userinfo.src = obj[0].src
		  }else{
			 state.userinfo.src="/img/long.png"
		  }
		  if(obj[0].gender=="男"){
			  state.userinfo.gender = false 
		  }else{
			  state.userinfo.gender = true  
		  }
		  state.userinfo.birthday = obj[0].birthday
	  },
	  setsitedataa(state,obj){
		  state.sitedataa = obj
		  state.dizhi=obj[0]
	  },
	  setorderinquire(state,obj){
		   state.orderinquire = obj
	  },
	  setwaitforreceiving(state,obj){
		  state.waitforreceiving = obj
	  },
	  setsalesreturn(state,obj){
		  state.salesreturn = obj
	  },
	  setallorders(state,obj){
		  state.allorders = obj
	  },
	  setpingnumder(state,obj){
		 state.pingnumder = obj
		 if (state.pingnumder.length>0) {
		 	 state.firstcomment.naem = obj[0].name
		 	 state.firstcomment.src = obj[0].src
		 	 state.firstcomment.time = obj[0].time
		 	 state.firstcomment.neirong = obj[0].neirong
			 state.firstcomment.show = true
		 } else{
		 	state.firstcomment.naem = null
		 	state.firstcomment.src = null
		 	state.firstcomment.time = null
		 	state.firstcomment.neirong = null
			state.firstcomment.show = false
		 }
	
	  }
  },
  actions: {
	  saveHome(context){
		  gettingdata().then(res =>{
			     context.commit('Home',res.data)
		  })
	  },
	  detailpage(context,odj){
		  getdetailpage(odj).then(res =>{
			     context.commit('detail',res.data)
		  })
	  },
	  commoditydeta(context,odj){
		   commoditydetails(odj).then(res =>{
		    	context.commit('commodity',res.data)
		   })
	  },
	  fengleidata(context){
		  getfengleidata().then(res =>{
		    	context.commit('setfengleidata',res.data)
		   })
	  },
	  classdata(context,odj){
		  getclassdata(odj).then(res =>{
		    	context.commit('setclassdata',res.data)
		   })
	  },
	  shangpingdata(context,odj){
		  getshangpingdata(odj).then(res =>{
		    	context.commit('setshangpingdata',res.data)
		   })
	  },
	  Productsdata(context,odj){
		  getProductsdata(odj).then(res =>{
		    	context.commit('setProductsdata',res.data)
		   })
	  },
	  mealdata(context,odj){
		  getmealdata(odj).then(res =>{
		    	context.commit('setmealdata',res.data)
		   })
	  },
	  xiangdangddata(context,odj){
		  getxiangdangddata(odj).then(res =>{
			    if (res.data) {
					Toast({
							message:"添加成功",
							iconClass: 'el-icon-circle-check',
							duration: 800
					});
			    	context.commit('setxiangdangddata',res.data)
			    }else{
					Toast({
							message:"添加失败",
							iconClass: 'el-icon-circle-close',
							duration: 800
					});
				}
		    	
		   })
	  },
	  checkthedata(context,odj){
		  getcheckthedata(odj).then(res =>{
		    	context.commit('setcheckthedata',res.data)
		   })
	  },
	  DELETEdata(context,odj){
		  getDELETEdata(odj).then(res =>{
			  if (res.data) {
			  	Toast({
			  			message:"删除成功",
			  			iconClass: 'el-icon-circle-check',
			  			duration: 800
			  	});
			  }else{
			  	Toast({
			  			message:"删除失败",
			  			iconClass: 'el-icon-circle-close',
			  			duration: 800
			  	});
			  }
		   })
	  },
	  userinfo(context,odj){
		  getxingxidata(odj).then(res =>{
			  context.commit('setuserinfo',res.data)
		   })
	  },
	  sitedataa(context,odj){
		  getsitedataa(odj).then(res =>{
			  context.commit('setsitedataa',res.data)
		   })
	  },
	  getorderinquire(context,user){
		  orderinquire(user).then(res =>{
		  			  context.commit('setorderinquire',res.data)
		   })
	  },
	  getwaitforreceiving(context,user){
		  waitforreceiving(user).then(res =>{
		  			  context.commit('setwaitforreceiving',res.data)
		   })
	  },
	  getsalesreturn(context,user){
		  salesreturn(user).then(res =>{
		  			  context.commit('setsalesreturn',res.data)
		   })
	  },
	  getallorders(context,user){
		  allorders(user).then(res =>{
		  			  context.commit('setallorders',res.data)
		   })
	  },
	  pingnumddsfdser(context,user){
		  getpingnumder(user).then(res =>{
		  			  context.commit('setpingnumder',res.data)
		   })
	  }
  },
  modules: {
  }
})
