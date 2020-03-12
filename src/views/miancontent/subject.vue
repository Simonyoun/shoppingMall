<template>
    <div class="subject">
		      <Navigation/>
			  <Scroll 
			         class="Scroll" 
			         :pullUpLoad="true"
					 @pullingUp="pullingUp"
			   >
				  <Lunbo id="lunbo"/>
				  <navigatoinfunction/>
				   <!-- <seckill/> -->
				   <recommend id="recommend"/>
			  </Scroll>
     </div>
</template>

<script>
import {Toast} from 'mint-ui'
import Navigation from "@/components/cephalic/navigation.vue"
import Scroll from "@/components/scroll/scroll.vue"
import Lunbo from '@/components/ncarousel/lunbo.vue'
import navigatoinfunction from '@/components/navigation/navigatoinfunction.vue'
import seckill from '@/components/seckill/seckill.vue'
import recommend from '@/components/recommend/recommend.vue'
export default {
  name: 'subject',
  components: {
    Lunbo,
    navigatoinfunction,
    seckill,
    recommend,
	Navigation,
	Scroll
  },
  methods: {
  	pullingUp() {
  		Toast({
  		  message: '暂无更多数据'
  		});
  	}
  },
}
</script>

<style scoped="scoped">
	.subject{
		height: calc(100% - 50px);
		overflow: hidden;
	}
	.Scroll{
		margin-top: 50px;
		height: 100%;
	}
</style>
