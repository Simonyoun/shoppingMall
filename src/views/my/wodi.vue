<template>
      <div class="wodi">
		  <Scroll class="wodiScroll">
			  <message/>
			  <deliveryprocess/>
			  <collection/>
			  <recommend/>
			
		  </Scroll>
      </div>
</template>

<script>
import Scroll from "@/components/scroll/scroll.vue"
import message from './message/message.vue'
import recommend from '@/components/recommend/recommend.vue'
import deliveryprocess from './deliveryprocess/deliveryprocess.vue'
import collection from './collection/collection.vue'
export default {
  name: 'wodi',
  components: {
    message,
    recommend,
    deliveryprocess,
    collection,
	Scroll
  }
}
</script>

<style lang="scss" scoped="scoped">
	.wodi{
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}
	.wodiScroll{
		height: 100% ;
	}
</style>
