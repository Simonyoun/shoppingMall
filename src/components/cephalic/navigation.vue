<template>
        <div id="nav">
			   哈哈购物
        </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="scss" scoped="scoped">
       $backgroundcolor: #66CCFF;
       #nav{
            text-align: center;
            width: 100%;
            height: 45px;
			line-height: 45px;
			font-size: 12px;
			text-align: center;
            background-color: $backgroundcolor;
			border: 1px solid #DDDDDD;
            position: fixed;
            top: 0px;
            z-index: 10000;
       }
</style>
