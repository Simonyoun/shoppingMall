<template>
     <div class="warehouse">
		 <Scroll class="gouwucheScroll">
		   <div class="warehousediv" v-for="v in this.$store.state.checkthedata" :key="v.id">
		   			   <div class="wareh"></div>
		   			   <div class="warehw">
		   				    <div class="warehwdiv1">
								<mt-checklist
								class="mtdiv1"
								  v-model="value"
								  :options="[
									  {
										label: ' ',
										value: v.id  
									  }
								  ]">
								</mt-checklist>
							</div>
		   					<div class="warehwdiv2">
								<img :src="v.src" />
							</div>
		   					<div class="warehwdiv3">
		   						 <div>
									  {{v.name}}
		   						 </div>
		   						 <div>
									  {{v.typ}}
								 </div>
		   						 <div>
									  <div>
										   <span>{{v.price}}</span>
									  </div>
									  <div>
										   <div class="vduv" @click="plus(v)">+</div>
										   <div class="vduv" >{{v.quantiy}}</div>
										   <div class="vduv" @click="subtract(v)">-</div>
									  </div>
								 </div>
		   					</div>
		   			   </div>
		   </div> 
		 </Scroll>
		  <div class="operation" v-if="this.$store.state.display">
			   <div @click="quanxuan" >
				   {{nameguo}}
			   </div>
			   <div @click="sangchu">
				   删除
			   </div>
			   <div>{{jiaguodata}}</div>
			   <div @click="xiandian">购买</div>
		  </div>
     </div>
</template>

<script>
import router from '@/router'
import {Toast} from 'mint-ui'
import Scroll from "@/components/scroll/scroll.vue"
export default {
  name: 'warehouse',
  inject:['reload'],
  data() {
  	return {
  		value: [],
		pricege:true,
		nameguo:"全部选中",
		jiaguo:{},
		jiaguodata: null
  	}
  },
  components: {
  	Scroll
  },
  created() {
	 this.$store.dispatch('checkthedata',localStorage.getItem("longon"))
	 this.$store.dispatch('sitedataa',localStorage.getItem("longon"))  
  },
  methods: {
  	plus(v) {
		v.quantiy++
		v.price = (this.$store.state.price[v.id]*v.quantiy).toFixed(2)
		this.jiaguo[v.id] = (this.$store.state.price[v.id]*v.quantiy).toFixed(2)
  	},
	subtract(v){
		if (v.quantiy<=1) {
			v.quantiy =1
		}else{
		   v.quantiy--
		   v.price = (this.$store.state.price[v.id]*v.quantiy).toFixed(2)
		   this.jiaguo[v.id] = (this.$store.state.price[v.id]*v.quantiy).toFixed(2)
		}
	},
	quanxuan(){
		if (this.pricege) {
		    this.value= this.$store.state.index
			this.pricege=false
			this.nameguo ="点击取消选中"
		} else{
			this.value= []
			this.pricege=true
			this.nameguo ="全部选中"
		}
	},
	sangchu(){
		this.reload()
		if (this.value.length == 0) {
			 Toast({
			   message: '请选商品',
			   duration: 800
			 });
		} else{
			this.$store.dispatch("DELETEdata",this.value)
		}
		
	},
	xiandian(){
		if (this.value.length == 0) {
			 Toast({
			   message: '请选商品',
			   duration: 800
			 });
		} else{ 
			if (this.$store.state.sitedataa.length >0) {
				let data = []
					for (let j = 0; j < this.$store.state.checkthedata.length; j++) {
						for (let i = 0; i < this.value.length; i++) {
						    if (this.$store.state.checkthedata[j].id==this.value[i]) {
						 	       data.push(this.$store.state.checkthedata[j])
						    }
						}
					}
				this.$store.state.Orderdata =data
				router.push({
						path: "/Alipay"
				
				})
			}else{
				Toast({
				   message:"请设置地址",
					 duration: 800
				});
				 router.push({
				 		 path: "/addresslist"
				 })
			}
		}
		
	}
  },
  beforeUpdate(){
	   for (let i = 0; i < this.value.length; i++) {
		   this.jiaguodata = (this.jiaguo[this.value[i]]) -0 
	   }
  }
}
</script>

<style lang="scss" scoped="scoped">
  .warehouse{
    width: 100%;
	height: 100vh;
	overflow: hidden;
	background-color: #CCFFFF ;
	position: relative;
    .gouwucheScroll{
		height: calc(100% - 116px);
	}
	.warehousediv{
		width: 96%;
		height: 200px;
		margin: 15px auto;
		border-radius: 10px;
		overflow: hidden;
		background-color: #FFFFFF ;
		.wareh{
			width: 100%;
			height: 50px;
			line-height: 50px;
			font-size: 12px;
			padding-left: 70px;
		}
		.warehw{
			width: 100%;
			display: flex;
			.warehwdiv1{
				flex: 1;
				height: 150px;
				.mtdiv1{
					margin-top: 40px;
					width: 100%;
				}
			}
			.warehwdiv2{
				flex: 3;
				height: 150px;
				img{
					width: 100%;
					margin-top: 15px;
					height: 100px;
				}
			}
			.warehwdiv3{
				flex: 6;
				height: 150px;
				div:nth-child(1){
					width: 100%;
					height: 60px;
					padding-left: 10px;
					font-size: 12px;
			    }
				div:nth-child(2){
					width: 100%;
					height: 45px;
					padding-left: 12px;
					font-size: 12px;
				}
				div:nth-child(3){
					width: 100%;
					height: 45px;
					display: flex;
					div:first-child{
						flex: 1;
						span{
							font-size: 16px;
							color: #A52A2A;
						}
					}
					div:last-child{
						flex: 1;
						.vduv:first-child{
							font-size: 21px;
						}
						.vduv{
							float: left;
							width: 20px;
							height: 40px;
							font-size: 16px;
							line-height: 40px;
						}
						.vduv:last-child{
							line-height: 35px;
							font-size: 36px;
						}
					}
				}
			}
		}
	}
	.operation{
		width: 100%;
		height: 50px;
		position: absolute;
		background-color: #FFFFFF;
		bottom: 51px;
		display: flex;
		div{
			flex: 1;
		}
		div:nth-child(1){
			line-height: 50px;
			text-align: center;
			font-size: 12px;
		}
		div:nth-child(2){
			background-color:  #FF0000 ;
			color: #FFFFFF ;
			line-height: 50px;
			text-align: center;
		}
		div:nth-child(3){
			background-color: #26A2FF;
		}
		div:nth-child(4){
			background-color: #66CCCC;
			line-height: 50px;
			color: #FFFFFF ;
			text-align: center;
		}
	}
  }
</style>
