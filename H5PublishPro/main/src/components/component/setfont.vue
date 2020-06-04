<!--设置字体大小组件-->
<template>
	<div class='wrap'>
		<el-slider :max="max" :min="min" @change="changeTitleSize" v-model='defaults'  show-input></el-slider>
	</div>
</template>

<script>
import {EventBus} from '../../unitls/eventBus.js'
	export default{
		name:'setfont',
		props:{
		},
		data(){
			return {
				defaults:14,
				min:12,
				max:28,
			}
		},
		methods:{
			changeTitleSize(size){
				this.$store.commit('changeTitleSize',size)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.wrap
	padding-left 10px
</style>
