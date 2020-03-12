<template>
     <div>
        <el-carousel :interval="4000" type="card" height="150px">
         <el-carousel-item v-for="(v,inex) in this.$store.state.HomePagedata" v-if="inex<3">
             <img style="width: 100%; height: 100%;" :src="v.picture">
          </el-carousel-item>
        </el-carousel>
     </div>
</template>

<script>

export default {
  name: 'lunbo',
  components: {
  },
  created(){
  	  this.$store.dispatch('saveHome')
  }
}
</script>

<style>
</style>
