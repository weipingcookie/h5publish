<!--列表顶通-->
<template>
	<div class="nav-wrapper">
		<div class="nav-inner">
			<span class="nav-left">
				<img class="logo" src="../../assets/images/logo.jpg" />
				<span class="title">看见发布平台</span>
			</span>
			<div class="nav-right">
				<span class="active cusbtn user-template" @click="showMyPage('zhaozhuo')">我的页面</span>
				<span class="cusbtn template-list">
					<span class="catory_btn" @click="drawer = true">分类页面</span>
					<el-drawer @open="resetCatory()" title="我是标题" :visible.sync="drawer" :with-header="false" direction="rtl">
						<div @click="showAll" class="catory_wrap"><span>所有页面</span></div>
						<div @click="showCatory(item.name)" class="catory_wrap" v-for="(item, index) in navCatory" :key="index">
							<span>{{ item.name }}</span>
						</div>
					</el-drawer>
				</span>
				<el-dropdown @command="localAction">
					<span class="el-icon-s-custom"></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="1">当前用户：zhaozhuo</el-dropdown-item>
						<el-dropdown-item command="2">清除本地缓存</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script>
import setData from '../../unitls/getLocalData.js';
export default {
	name: 'navs',
	data() {
		return {
			drawer: false,
			catoryList: []
		};
	},
	props: {},
	methods: {
		showCatory(cid) {
			setData();
			this.$store.commit('changeCatoryid', cid);
			if (this.$route.path != '/list') {
				this.$router.push('/list');
			}
			this.$store.commit('setPageData');
		},
		localAction(command) {
			if (command == '2') {
				window.localStorage.clear();
				this.$message('清理完成');
			}
		},
		showMyPage(uname) {
			this.$store.commit('changeSearchForName', uname);
			if (this.$route.path != '/list') {
				this.$router.push('/list');
			}
			this.$store.commit('setPageData');
		},
		resetCatory() {},
		showAll() {
			setData();
			this.showCatory('');
			this.$store.commit('changeSearchForName', '');
			this.$store.commit('setPageData');
		}
	},
	computed: {
		catoryData() {
			return this.$store.state.pageData.data;
		},
		navCatory() {
			return this.$store.state.catoryNavData;
		}
	},
	created() {}
};
</script>

<style lang="stylus" scoped>
.nav-wrapper
	width 100%
	height 60px
	box-shadow 0 1px 3px #aaa
	background #fff
	.nav-inner
		width 1200px
		margin 0 auto
		height 60px
.nav-left
	float left
	height 60px
	.logo
		width 158px
		margin-right 10px
.title
	font-size 30px
	font-weight bold
	color #409EFF
	position relative
	top -12px
.nav-right
	float right
	line-height 60px
	display flex
.cusbtn
	font-size 16px
	color #aaa
	cursor pointer
	height 60px
	padding 0 15px
	line-height 60px
.el-icon-s-custom
	font-size 30px
	line-height 60px
	background #f0f0f0
	padding 0 15px
	cursor pointer
.active
	color #fff
	background #409EFF
.catory_btn
	line-height 60px
	height 60px
	display block
.catory_wrap
	padding 0 10%
	&:hover
		span
			color #409EFF
</style>
