<!--轮播组件-->
<template>
	<div>
		<div class="wrap">
			<cswiper v-model="modelData" class="swiperDiv" :list='modelData'></cswiper>
		</div>		
	</div>
</template>

<script>
	import cswiper from '../cswiper/cswiper.vue'
	export default{
		name:"banner",
		props:['modelData','title'],
		data(){
			return{
			}
		},
		components:{
			cswiper
		}
	}
</script>

<style lang='stylus' scoped>
.wrap
	width 100%
	position relative
	img
		width 100%
		display block
	span
		color #fff
		position absolute
		bottom 10px
		left 10px
		font-size 14px
		width 100%
</style>
