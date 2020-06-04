<!--轮播组件-->
<template>
	<swipe v-model="index" :pagination="false" :autoplayTime="2000" ref="swipe" :key="key">
		<swipe-item v-for="(item, index) in list" :key="index" class="item-wrap">
			<img :src="item.img_url" />
			<p :style="{ 'font-size': titleSize, color: titleColor }">{{ item.content }}</p>
		</swipe-item>
	</swipe>
</template>

<script>
import { EventBus } from '../../unitls/eventBus.js';
export default {
	props: {
		/**
		 * 轮播图数据
		 */
		list: Array,
		/**
		 * 是否自动轮播
		 */
		autoPlay: {
			type: Boolean,
			default: true
		},
		/**
		 * 是否显示轮播的点
		 */
		showIndicator: {
			type: Boolean,
			default: false
		},
		/**
		 * 每两次隔多久滚动一次
		 */
		interval: {
			type: Number,
			default: 3000
		},
		/**
		 * 每次滚动一页需要多久
		 */
		duration: {
			type: Number,
			default: 300
		},
		dsizes: {
			type: null,
			default: 18 + 'px'
		}
	},
	data() {
		return {
			index: 0,
			key: 0
		};
	},

	components: {},

	computed: {
		titleSize() {
			if (this.$store.state.currentModelData != '') {
				return this.$store.state.currentModelData[0].config[0].defaultSize;
			} else {
				return '';
			}
		},
		titleColor() {
			if (this.$store.state.currentModelData != '') {
				return this.$store.state.currentModelData[0].config[1].defaultColor;
			} else {
				return '';
			}
		}
	},

	mounted() {},
	created() {
		//  EventBus.$off("aEvent");
		//  EventBus.$on("aEvent",function(data){
		//  	this.dsizes =data+'px'
		// this.titleSize = this.dsizes
		//  })
	},
	methods: {
		/**
		 * 轮播图点击事件
		 */
		clickSwiper(data) {
			this.$emit('clickSwiper', data);
		},
		updataModelData(index) {
			this.$store.commit('updataModelData', index);
			this.$refs.swipe.reset();
			this.key += 1;
		}
	},

	watch: {}
};
</script>
<style lang="stylus" scoped>
.item-wrap
	position relative
	width 100%
	height 150px
	overflow hidden
	img
		display block
		width 100%
		height 100%
	p
		position absolute
		bottom 10px
		left 10px
		width 100%
		color #fff
		font-size 14px
</style>
