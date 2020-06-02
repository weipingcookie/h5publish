<template>
	<div>
		<div class="wrap">
			<img src="../../assets/images/banner.jpg">
			<span class="title">{{title}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"banner2",
		props:['title']
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
