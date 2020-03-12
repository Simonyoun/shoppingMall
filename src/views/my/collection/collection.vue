<template>
  <div class="collection">
     <div class="collectiondiv">
		 <p>213</p>
		 <p>商品收藏</p> 
	 </div>
     <div class="collectiondiv">
		 <p>457</p>
		   <p>店铺收藏</p>
	 </div>
     <div class="collectiondiv">
		 <p>23</p>
		   <p>我的足迹</p>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'collection'
}
</script>

<style lang="scss" scoped="scoped">
  .collection{
     width: 100%;
     height: 50px;
	 background-color: #EEEEEE ;
	 box-sizing: border-box;
	 margin-top: 5px;
     display: flex;
     .collectiondiv{
        flex: 1;
		p{ 
			margin-top: 2px;
			text-align: center;
			line-height: 20px;
			font-size: 12px;
		}
     }
  }
</style>
