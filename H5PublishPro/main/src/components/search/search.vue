<!--列表筛选-->
<template>
	<div class="search-wrapper">
		<el-select @change="showCatory(catoryId)" class="selectone" v-model="catoryId" placeholder="请选择频道">
			<el-option v-for="(item, index) in catoryList" :key="index" :label="item" :value="item"></el-option>
		</el-select>
		<el-select @change="toggleSeal(category)" class="selecttwo" v-model="category" placeholder="请选择分类">
			<el-option label="所有页面" value=""></el-option>
			<el-option label="已发布" value="2"></el-option>
		</el-select>
		<div class="search-for-title">
			<el-input v-model="title"></el-input>
			<span @click="showForTitle(title)" class="search-title">查找标题</span>
		</div>
	</div>
</template>

<script>
import setData from '../../unitls/getLocalData.js'; //按标题查找页面后vuex数据发生变化，所以在执行其他方式查找之前需要拉取本地保存数据
export default {
	data() {
		return {
			channel: '国家大剧院',
			category: '',
			title: '',
			catoryList: []
		};
	},
	computed: {
		catoryData() {
			return this.$store.state.pageData;
		},
		catoryId: {
			get() {
				return this.$store.state.catoryIndex;
			},
			set(val) {
				this.$store.commit('changeCatoryid', val);
			}
		}
	},
	created() {
		let arr = [];
		let arr2 = [];
		for (var i = 0; i < this.catoryData.data.length; i++) {
			arr.push(this.catoryData.data[i].channelCatory);
		}
		for (var c = 0; c < arr.length; c++) {
			if (arr2.indexOf(arr[c]) == -1) {
				arr2.push(arr[c]);
			}
		}
		this.catoryList = arr2;
	},
	methods: {
		showCatory(channel) {
			setData();
			this.$store.commit('changeCatoryid', channel);
		},
		toggleSeal(seal) {
			setData();
			this.$store.commit('changeSeal', seal);
			this.$store.commit('setPageData');
		},
		showForTitle(title) {
			setData();
			this.$store.commit('changeCatoryid', '');
			for (var i = 0; i < this.catoryData.data.length; i++) {
				this.catoryData.data[i].show = false;
			}
			this.$store.commit('savePageData', this.catoryData);
			for (var i = 0; i < this.catoryData.data.length; i++) {
				if (this.catoryData.data[i].title.indexOf(title) == -1) {
					this.catoryData.data[i].show = true;
					this.$store.commit('savePageData', this.catoryData);
				} else {
					this.$store.commit('changeCatoryid', this.catoryData.data[i].channelCatory);
				}
			}
			this.$store.commit('setPageData');
		}
	}
};
</script>

<style lang="stylus" scoped>
.search-wrapper
	width 1120px
	height 60px
	line-height 60px
	padding 0 40px
	background #fff
	margin 0 auto
	border-top-left-radius 10px
	border-top-right-radius 10px
.selectone
	margin-right 10px
.search-for-title
	width 300px
	float right
	display flex
	align-items center
.search-title
	display inline-block
	width 100px
	height 38px
	line-height 40px
	border 1px solid #dcdfe6
	text-align center
	border-radius 3px
	margin-left 3px
	color #aaa
	cursor pointer
</style>
