<template>
   <div class="goodsindetali">
	   <Scroll class="goodsindetaliScroll"
	           @probeType="probeType"
			   :pullUpLoad="true"
	   >
		   <mt-swipe id="mt-swipe" :auto="4000">
		     <mt-swipe-item v-for =" v in this.$store.state.Productsdata" :key="v.id">
		   	   <img :src="v.src" />
		     </mt-swipe-item>
		   </mt-swipe> 
		   <div class="price">{{this.$store.state.shangpingdata.price}}</div>
		   <div class="goodsindetalidiv1">
		   	<div class="zuobianbiaoti">
		   		 {{this.$store.state.shangpingdata.name}}
		   	</div>
		   	<div class="youbian">
		   		<svg t="1581317646257" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1948" width="32" height="32"><path d="M975.078 406.195a19.087 19.087 0 0 0-13.619-12.697l-280.269-69.71L528.307 78.772c-7.04-11.238-25.549-11.238-32.589 0L342.835 323.79 62.541 393.498c-6.451 1.612-11.597 6.4-13.62 12.697a19.218 19.218 0 0 0 3.559 18.279L238.26 645.58l-20.327 288.128c-0.487 6.605 2.509 12.979 7.885 16.896a19.121 19.121 0 0 0 18.483 2.253L512 844.493l267.725 108.365a19.141 19.141 0 0 0 7.193 1.408c3.994 0 7.962-1.255 11.264-3.661a19.182 19.182 0 0 0 7.885-16.896l-20.326-288.103L971.52 424.5c4.25-5.094 5.606-12.006 3.558-18.304zM751.36 626.842a19.187 19.187 0 0 0-4.454 13.696l18.688 265.164-246.4-99.737c-2.304-0.947-4.762-1.408-7.194-1.408s-4.89 0.46-7.194 1.408l-246.4 99.737 18.688-265.164a19.187 19.187 0 0 0-4.454-13.696L101.658 423.347l257.945-64.153a19.256 19.256 0 0 0 11.674-8.474L512 125.235l140.698 225.51c2.662 4.225 6.835 7.271 11.673 8.474l257.946 64.154L751.36 626.842z" fill="#BFBFBF" p-id="1949"></path></svg>
		   	</div>
		   </div>
		   <div class="goodsindetalidiv2">
		   	 <div>
		   		 <span>
		   			  发货
		   		 </span>
				<span> {{this.$store.state.shangpingdata.placeof}}</span>
		   	 </div>
		   	 <div @click="pllu">
		   		 <span>
		   		 	  选择  <span>已选择：  {{this.$store.state.meal.name}}</span>
		   		 </span>
		   	 </div>
		   	 <div>
		   		 <span>
		   		 	  参数
		   		 </span>
		   	 </div>
		   </div>
		   <div class="goodsindetalidiv4" @click="pingluoafdd()" v-if="this.$store.state.firstcomment.show ">
		   	  <div class="goodsindetalidiv4-div1">
		   		   <div>评价<sub>好评 100%</sub></div>
		   		   <div>共{{this.$store.state.pingnumder.length}}条</div>
		   	  </div>
		   	  <div class="goodsindetalidiv4-div2"></div>
		   	  <div class="goodsindetalidiv4-div3">
		   		   <div>
		   			    <div>
		   					  <img :src="this.$store.state.firstcomment.src" />
		   					  <span> {{this.$store.state.firstcomment.naem}}</span>
		   				</div>
		   				<div>
		   					 {{this.$store.state.firstcomment.time}}
		   				</div>
		   		   </div>
		   		   <div>{{this.$store.state.firstcomment.neirong}}</div>
		   	  </div>
		   </div>
		   <div class="goodsindetalidiv5" @click="gdfgdfgdfg">
		   	  <div class="goodsindetalidiv5-a">
		   		   <div>
		   			    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583597379774&di=9c41c6e4a32f8571f6d028dbc1992436&imgtype=0&src=http%3A%2F%2Fpicx.zzwl.info%2Fu%2F40154%2F0220%2F158215746362845.jpg" />
		   				<span>很感动很过分</span>
		   		   </div>
		   		   <div>
		   			   <a href="#" style="color: #FF6600 ;">
		   				    <div style="border: 1px solid #FF6600 ;">
		   						全部宝贝
		   					</div>
		   			   </a>
		   			   <a href="#">
		   				    <div style="background-color: #FF6600;">
		   						进店逛逛
		   					</div>
		   			   </a>
		   		   </div>
		   	  </div>
		   	  <div class="goodsindetalidiv5-b">
		   		  <div>宝贝描述<sub>3.6</sub></div>
		   		  <div>卖家服务<sub>4.6</sub></div>
		   		  <div>物流服务<sub>5.6</sub></div>
		   	  </div>
		   </div>
		   <introduce class="goodsindetalidiv6" :orders = "order" />
		   <div class="goodsindetalidiv9"></div>
	   </Scroll>
	   <Buymodule  v-if="jhgjhfgh"/>
	   <transition>
	   		<pllup  v-if="this.$store.state.upboxrot">
				<div class="plludiv">
					<span @click="guanbi">关闭</span>
				</div>
				 <div class="upboxrotdiv">
					 <div>
						  <img :src="this.$store.state.meal.src" />
					 </div>
					 <div>
						 <p>￥{{this.$store.state.meal.price}}</p>
						 <p>
							 已选 <span>{{this.$store.state.meal.name}}</span>
						 </p>
					 </div>
				 </div>
				 <Scroll class="divupboxrot">
					   <div>
						     <p>分类</p>
						     <div class="divupboxrotdiv" v-for="v in this.$store.state.mealdata" :key ="v.id">
								 <div @click="namedata(v.name,v.src,v.price)">
									<img :src="v.src" />
									<span>{{v.name}}</span>
								 </div>
							 </div>
							  <div class="divupboxrotdiv1">
								   <p>套餐类型</p> 
								   <div class="gaonfang" @click="gaonfang">
									   官方标配
								   </div>
								   <div class="shuliang">
									   <div>购买数量</div>
									   <div>
										    <div @click="jiandata" style="text-align: right;font-size: 30px;"><strong>-</strong></div>
											<div>{{shudata}}</div>
											<div @click="jiadata" style="font-size: 22px;"><strong>+</strong></div>
									   </div>
								   </div>
							  </div>

					   </div>
				 </Scroll>
				 <div class="upboxrotdiv1">
					  <div @click="jiarugong">
						   加入购物车
					  </div>
					  <div @click="gongmai">
						   立即购买
					  </div>
				 </div>
	   		</pllup>
	   </transition>
   </div>
</template>

<script>
import router from '@/router'
import {Toast} from 'mint-ui'
import Scroll from "@/components/scroll/scroll.vue"
import introduce from '@/components/introduce/introduce.vue'
import Buymodule from '@/components/Buymodule/Buymodule.vue'
import pllup from '@/components/pllup/pllup.vue'
export default {
  name: 'goodsindetali',
  data() {
  	return {
  		order: null,
		upbox: false,
		shudata:1,
		jhgjhfgh: true
  	}
  },
  components: {
	  introduce,
	  Buymodule,
	  Scroll,
	  pllup
  },
  created() {
	this.order=this.$route.query.id;
	this.$store.dispatch('sitedataa',localStorage.getItem("longon"))  
	this.$store.dispatch('shangpingdata',this.order)
	this.$store.dispatch('Productsdata',this.order)
	this.$store.dispatch('mealdata',this.order)
	 this.$store.dispatch('pingnumddsfdser',this.order)
	 this.$store.state.upboxrot = false
  },
  methods: {
  	pllu() {
		this.$store.commit('setupboxrotdata',true)
  	},
	guanbi() {
		this.$store.commit('setupboxrotdata',false)
	},
	  jiadata(){
		  this.shudata++ 
	  },
	  jiandata(){
		  if (this.shudata <= 1) {
		  	 this.shudata = 1
		  }else{
			  this.shudata--
		  }
		  
	  },
	  namedata(data,src,price){
		 this.$store.commit('setmealda',{data,src,price})
	  },
	  gaonfang(){

	  },
	  jiarugong(){
		  if (localStorage.getItem("longon")) {
		  	  Toast({
		  	    message: '加入成功',
		  	    iconClass: 'el-icon-circle-check',
		  	  	duration: 800
		  	  });
			  this.$store.dispatch('xiangdangddata',{
				  user:localStorage.getItem("longon"),
				  name:this.$store.state.shangpingdata.name,
				  src:this.$store.state.meal.src,
				  typ:this.$store.state.meal.name,
				  price:this.$store.state.meal.price,
				  quantiy:this.shudata,
				  numder:this.$store.state.meal.numder
			  })
		  }else{
			  Toast({
			  		message:"未登录",
			  		duration: 800
			  });
			  router.push({
			  		path: "/login"
			  })
		  }
	  },
	  gongmai(){
		  if (localStorage.getItem("longon")) {
			  if (this.$store.state.sitedataa.length >0) {
			  	  let data = [];
			  	  data.push(
							{
							user:localStorage.getItem("longon"),
							name:this.$store.state.shangpingdata.name,
							src:this.$store.state.meal.src,
							typ:this.$store.state.meal.name,
							price:(this.$store.state.meal.price*this.shudata),
							quantiy:this.shudata,
							numder:this.$store.state.meal.numder
							} 
						 )
			  	  this.$store.state.Orderdata = data
			  	   router.push({
			  	   		 path: "/Alipay"
			  	   })
			  } else{
			  	  Toast({
			  	     message:"请设置地址",
			  	  	 duration: 800
			  	  });
				   router.push({
				   		 path: "/addresslist"
				   })
			  }
			  
		  }else{
		  	 Toast({
		  	    message:"未登录",
		  		duration: 800
		  		});
		  	 router.push({
		  		path: "/login"
		  	 })
		  }
	  },
	  pingluoafdd(){
		  this.$router.push({
		  	path: "/pinglunlie",
		   query:{
				ordernumber:this.order
		   }
		  })
	
	  },
	  probeType(v){
		  if (v.y<0) {
		  	this.jhgjhfgh = false
		  } else{
		  	this.jhgjhfgh = true
		  }
	  },
	  gdfgdfgdfg(){
		  	Toast({
		  		message:"未开发",
		  		duration: 800
		  	});
	  }
  }
}
</script>

<style lang="scss" scoped="scoped">
	*{
		margin: 0px;
		padding: 0px;
	}
	.goodsindetali{
		height: 100vh;
		overflow: hidden;
	}
	.goodsindetaliScroll{
		height: 100%;
	}
	#mt-swipe{
		width: 100%;
		height: 200px;
		img{
			width: 100%;
			height: 200px;
		}
	}
	.price{
		width: 100%;
		margin-top: 2px;
		height: 50px;
		color: #FF0000;
		line-height: 50px;
		font-size: 18px;
	 }
	.goodsindetalidiv1{
		width: 100%;
		margin: 0px auto;
		height: 60px;
		margin-top: 2px;
		.zuobianbiaoti{
			width: 80%;
			height: 60px;
			line-height: 20px;
			float: left;
		}
		.youbian{
			width: 20%;
			height: 60px;
			float: right;
			svg{
				margin-top: 0px;
				margin-left: 20px;
			}
		}
	}
	.goodsindetalidiv2{
		width: 100%;
		height: 160px;
		margin-bottom: 5px;
		div{
			width: 100%;
			height: 50px;
			margin-top: 2px;
			line-height: 50px;
			span{
				padding-left: 8px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			&:last-child{
				border-bottom: 1px solid #000000;
			}
		}
	}
	.goodsindetalidiv4{
		width: 96%;
		margin: 5px auto;
		border: 1px solid #CCCCCC ;
		.goodsindetalidiv4-div1{
			width: 100%;
			height: 50px;
			display: flex;
			box-sizing: border-box;
			div:nth-child(1){
				flex: 1;
				line-height: 50px;
			}
			div:nth-child(2){
				flex: 1;
				line-height: 50px;
				text-align: right;
				margin-right: 20px;
			}
		}
		.goodsindetalidiv4-div2{
			width: 100%;
			height: 50px;
		}
		.goodsindetalidiv4-div3{
			width: 100%;
			height: 100px;
			border-top: 1px solid #CCCCCC;
			div:nth-child(1){
                 width: 100%;
				 height: 50px;
				 display: flex;
				 div:first-child{
					 flex: 1;	 
					 img{
						 width: 50px;
						 height: 50px;
						 border-radius: 50px;
					 }
					 span{
						 line-height: 50px;
						 margin-left: 5px;
					 }
				 }
				 div:last-child{
				 	 flex: 1;
				 }
			}
			div:nth-child(2){
                width: 100%;
                height: 50px;
                text-align: center;
				line-height: 50px;
			}
		}
	}
	.goodsindetalidiv5{
		width: 96%;
		height: 100px;
		margin: 4px auto;
		border: 1px solid #DDDDDD ;
		.goodsindetalidiv5-a{
			width: 100%;
			height: 70px;
			display: flex;
			div:first-child{
				flex: 1;
				img{
					width: 50px;
					height: 50px;
					border-radius: 50px;
					margin-top: 5px;
					vertical-align: middle;
				}
				span{
					align-content: center;
					margin-left: 15px;
					font-size: 12px;
				}
			}
			div:last-child{
				flex: 1;
				display: flex;
				a{
					text-decoration: none;
					color: #DDDDDD ;
					font-size: 12px;
					div{
						margin-top: 14px;
						text-align: center;
						line-height: 35px;
						border-radius: 50px;
						width: 60px;
						padding-left: 10px;
						margin-left: 10px;
						flex: 1;
						height: 35px;
					}
				}
			}
		}
		.goodsindetalidiv5-b{
			display: flex;
			div{
				flex: 1;
				height: 20px;
				font-size: 12px;
				color: #777777   ;
				text-align: center;
			}
		}
	}
	.goodsindetalidiv6{
		width: 100%;
	}
	.upboxrotdiv{
		width: 100%;
		height: 100px;
		display: flex;
		border-bottom: 1px solid #000000;
		div:first-child{
			flex: 1;
			height: 100px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		div:last-child{
			flex: 2;
			height: 100px;
			p:first-child{
				margin-top: 15px;
				margin-left: 30px;
				color: #A52A2A;
			}
			p:last-child{
				margin-top: 15px;
				margin-left: 30px;
			}
		}
	}
	.divupboxrot{
		width: 100%;
		height: 300px;
		overflow: hidden;
		p{
			padding-left: 8px;
			padding-top: 5px;
			font-size: 14px;
			margin-top: 5px;
		}
		.divupboxrotdiv{
			width: 100%;
			margin-top: 10px;
			div{
				width: 48%;
				height: 40px;
				margin-top: 5px;
				margin-left: 1%;
				float: left;
				border: 1px solid #000000;
				margin-bottom: 6px;
				border-radius: 8px;
				overflow: hidden;
				img{
					width: 40px;
					height: 40px;
					vertical-align: middle;
				}
				span{
					padding-left: 10px;
					font-size: 12px;
				}
			}
		}
		.divupboxrotdiv1{
			width: 100%;
			height: 250px;
			clear: left;
			.gaonfang{
				margin-top: 10px;
				margin-left: 8px;
				width: 80px;
				line-height: 45px;
				text-align: center;
				font-size: 12px;
				border-radius: 10px;
				height: 45px;
				border: 1px solid #FF6600;
				&:hover{
					font-size: 40px;
				}
			}
			.shuliang{
				border-top: 1px solid #CCCCCC;
				margin-top: 5px;
				width: 100%;
				line-height: 50px;
				height: 50px;
				border-bottom: 1px solid #CCCCCC;
				display: flex;
				div:first-child{
					flex: 1;
					padding-left: 10px;
				}
				div:last-child{
					flex: 2;
					 display: flex;
					 text-align: center;
					div{
						flex: 1;
						line-height: 40px;
						margin-top: 5px;
						height: 40px;
						font-size: 20px;
					}
				}
			 }
		}
	}
	.upboxrotdiv1{
		width: 98%;
		height: 45px;
		margin: 0px auto;
		display: flex;
		background-image: linear-gradient(to right, #FF6600 ,#FF0000);
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		overflow: hidden;
		line-height: 45px;
		text-align: center;
		color: #FFFFFF;
		div{
			flex: 1;
		}
	}
	.goodsindetalidiv9{
		width: 100%;
		height: 101px;
	}
	.plludiv{
		width: 100%;
		height: 50px;
		box-shadow: -2px -2px 2px  #66CC66;
		text-align: right;
		line-height: 50px;
		color: #66CCCC;
		border-bottom: 1px solid #CCCCCC;
		span{
			margin-right: 30px;
		}
	}
   .v-enter,.v-leave-to{
	 opacity: 0;
	 transform: translate(0px,200px);
   }
   .v-enter-active,.v-leave-active{
	 transition: all 0.4s ease;
   }
</style>
