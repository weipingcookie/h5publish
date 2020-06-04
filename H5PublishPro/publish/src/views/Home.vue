<template>
  <div class="home">
		<div>发布内容</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { navigateToUrl } from 'single-spa';
export default {
  name: 'home',
  components: {

  },
  methods:{
	  back(){
		  navigateToUrl("/list")
	  }
  }
}
</script>
