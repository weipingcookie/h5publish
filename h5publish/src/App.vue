<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
 data () {
   return {
     isRouterAlive: true
   }
 },
 methods: {
   reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   }   
 },
 created(){
 }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  background #efefef
  overflow hidden
  min-height 100vh
[v-cloak]
	display: none
</style>
