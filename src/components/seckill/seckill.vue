<template>
      <div class="seckill">
            <div class="seckillDiv1">
                  <div>{{list[0]}}</div>
                  <div></div>
                  <div>{{list[1]}}</div>
            </div>
            <div class="seckillDiv2">
				 <div style="width: 150%;height: 80px;background-color: #00FFFF;" >
					  <p id="slidingblock"></p>
					  <p id="slidingblock"></p>
					  <p id="slidingblock"></p>
					  <p id="slidingblock"></p>
					  <p id="slidingblock"></p>
					  <p id="slidingblock"></p>
				 </div>
			</div>
      </div>
</template>

<script>
export default {
  name: 'seckill',
  data () {
    return {
      list: [
        '秒杀价',
        '更多'
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped="scoped">
   $backgroundcolor: #EEEEEE;
  .seckill{
     width: 100%;
     height: 100px;
     margin-top: 2px;
     background-color:$backgroundcolor ;
     .seckillDiv1{
        width: 100%;
        height: 20px;
        display: flex;
        div{
           flex: 1;
        }
        div:nth-child(1){
           color:#DD6161;
           font-size: 12px;
           text-align: center;
        }
        div:nth-child(2){
           flex: 2;
        }
        div:nth-child(3){
            text-align: center;
            font-size: 12px;
        }
     }
     .seckillDiv2{
        width: 100%;
        height: 80px;
		overflow: hidden;
		font-size: 36px;
     } 
  }
  #slidingblock{
  	width: 70px;
  	height: 70px;
  	float: left;
  	border: 1px  #000000 solid;
  }
</style>
