<!--页面列表-->
<template>
	<div class="page-wrappper">
		<div class="list-wrapper">
			<div
				v-if="(catoryIndex == '' || catoryIndex == item.channelCatory) && (sname == '' || sname == item.author) ? true : false"
				class="list-item"
				v-for="(item, index) in data2"
				:key="index"
				v-show="!showSeal && !item.show ? true : false"
			>
				<img @mouseover="showCode(item)" @mouseout="showImg(item)" class="item-img" :src="item.image" />
				<div class="item-title">
					<p :title="item.title">{{ item.title }}</p>
					<i class="el-icon-s-tools set">
						<div class="set-wrap">
							<div @click="goToEdit(item.pageId)">
								编辑
								<i class="el-icon-edit"></i>
							</div>
							<div @click="setPageInfo(item.pageId)">
								设置
								<i class="el-icon-s-tools"></i>
							</div>
							<div>
								预览
								<i class="el-icon-view"></i>
							</div>
							<div>
								删除
								<i class="el-icon-delete"></i>
							</div>
						</div>
					</i>
				</div>
				<div class="item-info">
					<div>
						<span class="tname">作者：</span>
						<span>{{ item.author }}</span>
					</div>
					<div>
						<span class="tname">时间：</span>
						<span>{{ item.time }}</span>
					</div>
					<div>
						<span class="tname">{{ item.storage ? '已封存' : '未封存' }}</span>
						<el-switch @change="storageChange(item)" class="switch" inactive-color="#13ce66" active-color="#C60935" v-model="item.storage"></el-switch>
					</div>
				</div>
			</div>
		</div>
		<div class="pagination">
			<el-pagination @current-change="changePage" :current-page="pageSize" :page-size="psize" background layout="prev, pager, next" :total="totalsize"></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			replaceimg: '',
			defaultPagination: 1, //默认页码
			psize: 12, //每页默认显示12个
			totalsize: null, //页面总数
			pdata: [] //存储分页数据
		};
	},
	created() {},
	mounted() {
		//如果没有本地缓存数据就把vuex中获得的数据缓存到本地
		if (JSON.parse(window.localStorage.getItem('pagedata')) != null) {
			this.$store.commit('savePageData', JSON.parse(window.localStorage.getItem('pagedata')));
		}
		this.totalsize = this.data.length;
		this.$store.commit('setPageData');
	},
	computed: {
		data() {
			//页面列表数据
			return this.$store.state.pageData.data;
		},
		data2() {
			//页面列表数据
			return this.$store.state.fdata;
		},
		pageAllSize() {
			return this.$store.state.pageData.data.length;
		},
		pageSize() {
			//分页页码数值
			return this.$store.state.defaultPagination;
		},
		catoryIndex() {
			//分类标识str
			return this.$store.state.catoryIndex;
		},
		showSeal() {
			//封存标识
			return this.$store.state.showSeal;
		},
		sname() {
			return this.$store.state.searchForName;
		}
	},
	methods: {
		changePage(e) {
			//保存页码方法
			this.$store.commit('updataDefaultPagination', e);
			this.$store.commit('setPageData');
		},
		updatePagination() {
			//分页切换方法
			this.pdata = [];
			this.totalsize = this.data.length;
			for (var i = (this.pageSize - 1) * this.psize; i < this.data.length; i++) {
				if (i < 12 && this.pageSize == 1) {
					this.pdata.push(this.data[i]);
				}
				if (i > 11 && this.pageSize > 1) {
					this.pdata.push(this.data[i]);
				}
			}
		},
		showCode(item) {
			//显示页面二维码
			if (!item.storage) {
				this.replaceimg = item.image;
				item.image = item.codeimg;
			}
		},
		showImg(item) {
			//显示页面封面
			if (!item.storage) {
				item.image = this.replaceimg;
			}
		},
		storageChange(e) {
			//页面数据变化同步保存到本地缓存
			let data = JSON.parse(JSON.stringify(this.$store.state.pageData));
			this.$store.commit('savePageData', JSON.parse(JSON.stringify(data)));
			window.localStorage.setItem('pagedata', JSON.stringify(data));
			this.$store.commit('setPageData');
		},
		goToEdit(id) {
			//跳转到页面编辑页
			this.$router.push({ path: '/editpage', query: { pid: id } });
			this.$store.commit('getCurrentPageData', id);
		},
		setPageInfo(id) {
			//跳转到页面信息设置页
			this.$router.push({ path: '/settingpage', query: { pid: id } });
			this.$store.commit('getCurrentPageData', id);
		}
	},
	destroyed() {
		console.log('list组件销毁');
	}
};
</script>

<style lang="stylus" scoped>
.list-wrapper
	width 1200px
	margin 0 auto
	margin-top 20px
	// display flex
	justify-content space-between
	flex-wrap wrap
.list-wrapper:after
	content ''
	width 290px
	height 0
	display block
.list-item
	float left
	width 290px
	margin-bottom 20px
	margin-right 13px
	&:nth-child(4n)
		margin-right 0
.item-img
	width 290px
	height 290px
	cursor pointer
	display block
.item-title
	padding 20px 15px
	background #409EFF
	color #fff
	display flex
	justify-content space-between
	p
		text-overflow ellipsis
		overflow hidden
		white-space nowrap
		font-size 18px
		margin-right 2px
	i
		font-size 18px
		cursor pointer
.item-info
	background #FFFFFF
	display flex
	flex-direction column
	justify-content space-around
	padding 20px 10px 0px
	div
		margin-bottom 10px
	div:first-child
		font-style italic
	div:last-child
		overflow hidden
		.switch
			float right
.tname
	color #a0a0a0
.pagination
	width 1200px
	margin 0 auto
	padding-bottom 20px
	display flex
	justify-content center
.set
	display block
	position relative
.set-wrap
	position absolute
	width 55px
	background #efefef
	padding 10px
	text-align center
	color #888888
	font-size 14px
	border-radius 3px
	top 7px
	left 7px
	display none
	user-select none
	box-shadow 0 0 1px #000
	z-index 10
	div
		margin-bottom 6px
		display flex
		align-items center
		&:hover
			color #3D6BF0
	i
		margin-left 5px
.item-title .set
	&:hover
		.set-wrap
			display block
</style>
