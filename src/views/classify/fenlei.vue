<template>
     <div class="fenlei">
		 <Scroll class="fenleiScrolla">
		    <Apage/>
		 </Scroll>
		 <Scroll class="fenleiScrollb">
		    <Bpage/>
		 </Scroll>
		
     </div>
</template>

<script>
import Scroll from "@/components/scroll/scroll.vue"
import Apage from '@/views/classify/subpage/Apage.vue'
import Bpage from '@/views/classify/subpage/Bpage.vue'
export default {
  name: 'fenlei',
  components: {
    Apage,
    Bpage,
	Scroll
  }
}
</script>

<style  scoped="scoped">
.fenlei{
	height: 100vh;
	display: flex;
}
.fenleiScrolla{
	flex: 2;
	height: calc(100% - 50px);
	overflow: hidden;
}
.fenleiScrollb{
	height: 100%;
	flex: 8;
	overflow: hidden;
}
</style>
