<template>
	<div>
	  <div id="single-vue" class="single-spa-vue"><div id="vue"></div></div>
	</div>
</template>

<script>
import { navigateToUrl } from 'single-spa';
export default {
	name: 'publish',
	data() {
		return {};
	},
	methods:{
	},
	created(){
		navigateToUrl("/vue#")
	}
};
</script>

<style></style>
