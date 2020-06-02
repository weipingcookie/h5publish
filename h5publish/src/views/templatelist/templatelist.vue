<template>
	<div>
		<templatenav></templatenav>
		<announcement :lists="lists"></announcement>
		<div class="sys-entry">
			<div class="entry-left">
				<span class="el-icon-notebook-2 icon"></span>
				<div class="left-info">
					<span class="page-count">{{ pageSize }}</span>
					<span class="page-title">页面总计</span>
				</div>
			</div>
			<div class="create-page" @click="dialogFormVisible = true">
				<span class="el-icon-plus plus"></span>
				<span class="create-title">创建页面</span>
			</div>
		</div>
		<search></search>
		<list></list>
		<el-dialog title="创建页面" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="页面名称" :label-width="formLabelWidth"><el-input style="width:217px;" v-model="form.pageName" autocomplete="off"></el-input></el-form-item>
				<el-form-item label="选择频道" :label-width="formLabelWidth">
					<el-select v-model="form.channel" placeholder="请选择页面所属频道">
						<el-option v-for="(item,index) in catoryList" :key="index" :label="item.name" :value="item.name"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="createPage(1)">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import templatenav from '../../components/nav/nav.vue'; //头部+导航组件
import announcement from '../../components/announcement/announcement.vue'; //公告组件
import search from '../../components/search/search.vue'; //搜索组件
import list from '../../components/list/list.vue'; //页面列表展示组件
import instance from '../../api/interceptor.js';
import { delCookie } from '../../api/cookie.js';
export default {
	name: 'navs',
	data() {
		return {
			num: 1,
			lists: ['更新公告：各位小主，新版功能已经正式上线，请在页面查看最新的功能吧！'],
			form: {
				pageName: '',
				channel: ''
			},
			formLabelWidth: '120px',
			dialogFormVisible: false
		};
	},
	components: {
		templatenav,
		announcement,
		search,
		list
	},
	created() {},
	methods: {
		createPage(id) {
			if (this.form.pageName == '' || this.form.channel == '') {
				this.$message({
					message: '请填写页面名称并选择频道',
					type: 'warning'
				});
			} else {
				this.$router.push({ path: '/settingpage', query: { pid: id } });
			}
		},
		ajaxtest() {
			//接口测试方法
			this.Axios.post('http://172.20.169.24:8080/CMS/h5page/h5Page', {
				action: '3',
				data: {
					pageID: 'PAGER49nAapn7P9TNjNDVKZ2200509',
					name: 'bbbbbbbb',
					issueLockFlag: 1,
					img: 'http://p1.img.ss.33333.png',
					description: 'www123456'
				}
			}).then(res => {
				console.log(res);
			});
		}
	},
	computed: {
		pageSize() {
			return this.$store.state.pageData.data.length;
		},
		catoryList(){
			return this.$store.state.catoryNavData
		}
	}
};
</script>

<style lang="stylus" scoped>
.sys-entry
	background #fff
	padding 0 40px
	width 1120px
	height 150px
	margin 0 auto
	display flex
	align-items center
	justify-content space-between
	margin-bottom 20px
	border-top-left-radius 10px
	border-top-right-radius 10px
.icon
	color #fff
	background #409EFF
	padding 20px
	font-size 50px
	border-radius 50%
.entry-left
	display flex
.left-info
	display flex
	flex-direction column
	align-items flex-start
	justify-content center
	margin-left 15px
.page-count
	font-size 26px
	color #409EFF
	margin-bottom 10px
.page-title
	color #acacac
.plus
	font-size 26px
	font-weight bold
	color #409EFF
	margin-bottom 10px
.create-title
	font-size 18px
	color #409EFF
.create-page
	width 90px
	height 90px
	text-align center
	display flex
	flex-direction column
	align-items center
	justify-content center
	box-shadow #e0e0e0 0px 0px 4px inset
	border-radius 3px
	cursor pointer
	&:hover
		box-shadow #e0e0e0 0px 0px 5px
		.plus
			font-size 28px
		.create-title
			font-size 19px
</style>
