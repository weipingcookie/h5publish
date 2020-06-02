<template>
	<div class='wrap'>
		<el-color-picker @change="changeTitleColor" v-model="defaltColor"></el-color-picker>
	</div>
</template>

<script>
	export default{
		name:'setcolors',
		data(){
			return {
				defaltColor:"#fff"
			}
		},
		methods:{
			changeTitleColor(color){
				this.$store.commit('changeTitleColor',color)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.wrap
	padding-left 10px
</style>
