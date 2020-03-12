<template>
  <div id="app" >
    <router-view v-if="inRouterAlive"></router-view>
    <Xiadaohang/>
  </div>
</template>

<script>
import Xiadaohang from '@/components/Thenavigation/xiadaohang.vue'
export default {
  name: 'app',
  components: {
    Xiadaohang
  },
  provide(){
	  return {
		  reload: this.reload
      }
  },
  data() {
  	return {
  		inRouterAlive: true
  	}
  },
  methods: {
  	reload() {
  		this.inRouterAlive = false;
		this.$nextTick(function () {
			this.inRouterAlive = true
		})
  	}
  },
  created(){
	  this.$store.dispatch('sitedataa',localStorage.getItem("longon")) 
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
	height: 100vh;
   min-width: 320px;
   margin: 0px auto;
}
.active{ 
	color: #FF3333  !important;
 }
</style>
