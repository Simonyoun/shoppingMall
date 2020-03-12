<template>
      <div class="recommend">
          <div class="recommendh1">{{tuijian}}</div>
          <div class="recommendh2">
                  <div v-for="v in this.$store.state.HomePagedata" :key="v.id">
						   <router-link :to="{path: '/goodsindetali',query: {id:v.ordernumber}}" >
                             <img v-lazy="v.picture"/>
                             <p style="text-align: center; color: #888888 ;">{{v.name}}</p>
                             <p>{{v.price}}</p>
						   </router-link>
                     </div>
          </div>
          <div class="recommendh3"></div>
      </div>
</template>

<script>

export default {
  name: 'recommend',
  data () {
    return {
      tuijian: '推荐'
    }
  },
  created(){
	  this.$store.dispatch('saveHome')
  }
}
</script>

<style lang="scss" scoped="scoped">
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
  $backgroundcolor: #FFFFFF;
.recommend{
  width: 100%;
  background-color:$backgroundcolor;
  margin-top: 2px;
  .recommendh1{
      text-align: center;
      color: #000000;
  }
  .recommendh2{
     width: 100%;
     div{
      width: 47%;
      height: 200px;
      margin-left: 2%;
      float: left;
      margin-top: 5px;
      box-sizing: border-box;
      border: 1px solid #CCCCCC ;
      background-color: #FFFFFF;
	  &:hover{
		  border: 1px solid #333333; 
	  }
	  a{
		  text-decoration: none;
		  color: #DD6161;
	  }
      img{
        width: 100%;
        height: 150px;
      }
      p{
        font-size: 12px;
		height: 25px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
        span{
          color: #A52A2A;
        }
      }
     }
  }
  .recommendh3{
    width: 100%;
    height: 55px;
    clear: left;
  }
}
</style>
