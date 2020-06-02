<template>
	<div>
		<topnav></topnav>
		<div class="info-wrapper">
			<div class="left-show">
				<vue-scroll :ops="vuescroll">
					<img src="../../assets/images/banner.jpg" />
					<p class="title">国家大剧院“春天在线”系列音乐会：迟来的春天</p>
					<ul>
						<li>时间：2020.4.10 （周五） 19:30</li>
						<li>地点：国家大剧院大师俱乐部</li>
						<li>演出：国家大剧院管弦乐团</li>
						<li>演出曲目：</li>
						<li>降E大调管弦六重奏</li>
						<li>第一乐章</li>
						<li>第一乐章：慢板</li>
						<li>长笛：依依</li>
					</ul>
				</vue-scroll>
			</div>

			<div class="right-show">
				<div class="right-title"><span>基本设置</span></div>
				<div class="content-wrapper">
					<div class="cover-wrapper">
						<img :src="defSrc" />
						<span class="change-cover">更换页面封面</span>
						<uploadimg
							@getServerImgSrc="getServerImgSrc"
							style="position: absolute;top:214px;height:36px;background: #fff;width:100%;opacity: 0;cursor: pointer;"
						></uploadimg>
					</div>
					<div class="change-information">
						<div class="from-item">
							<span>页面名称</span>
							<el-input :value="currentPage.title" v-model="currentPage.title"></el-input>
						</div>
						<div class="from-item">
							<span>背景图片</span>
							<el-button class="upload-img">上传图片</el-button>
							<p class="img-proposal">建议尺寸:1920*1200</p>
						</div>
						<div class="from-item">
							<span>是否封存</span>
							<el-switch
								class="selectone"
								v-model="currentPage.storage"
								inactive-color="#13ce66"
								active-color="#C60935"
								active-text="已封存"
								inactive-text="未封存"
							></el-switch>
						</div>
						<div class="from-item">
							<span>所属频道</span>
							<el-select class="selectone" v-model="currentPage.channelCatory">
								<el-option :label="currentPage.channelCatory" :value="currentPage.channelCatory"></el-option>
							</el-select>
						</div>
						<div class="from-item" style="align-items: flex-start;">
							<span class="desc-title">页面描述</span>
							<el-input type="textarea" :rows="3" placeholder="请输入页面描述" v-model="pagedesc"></el-input>
						</div>
					</div>
				</div>
				<div class="btm-wrapper">
					<div class="btn-wrapper">
						<span @click="goEditpage(currentPage.pageId)" class="edit-btn">编辑页面</span>
						<span @click="saveChangePageInfo" class="save-btn">保存设置</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import topnav from '../../components/nav/nav.vue';
export default {
	data() {
		return {
			pagename: '',
			sealing: 'false',
			horizontal: '',
			pagewidth: '',
			channel: '',
			pagedesc: '',
			defSrc: require('../../assets/images/logo.jpg'),
			vuescroll: {
				bar: {
					background: 'rgb(93,135,255)'
				}
			}
		};
	},
	components: {
		topnav
	},
	computed: {
		currentPage() {
			return this.$store.state.currentPageData;
		}
	},
	created() {
		this.$store.commit('getCurrentPageData', Number(this.$route.query.pid));
	},
	methods: {
		goEditpage(id) {
			this.$router.push({ path: '/editpage', query: { pid: id } });
			this.$store.commit('getCurrentPageData', id);
		},
		handlePreview(file) {
			let formData = new FormData();
			console.log(file);
			formData.append('file', file.raw);
			console.log(formData);
			this.Axios.post('http://172.20.169.24:8080/CMS/uploadOneImgtopicUpLoadImg?topicId=1111', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}).then(res => console.log(res));
		},
		fileChange(e) {
			// 获取文件对象数组
			let files = e.target.files;
			// 创建一个FormData，存储需要提交的表单数据，如果通过ajax方式上传文件，必须使用FormData
			let formData = new FormData();
			// 普通表单数据
			formData.append('num', 123);
			formData.append('name', 'aa');
			// 文件数据
			formData.append('file', files[0]);
			// 多个文件数据需要遍历放入
			for (let f of files) {
				formData.append('files', f);
			}
			// 上传data必须转为formData
			this.Axios.post('http://172.20.169.24:8080/CMS/uploadOneImgtopicUpLoadImg', formData, {
				// 覆盖默认设置中的transformRequest设置
				transformRequest: [
					(params, headers) => {
						// 请求头Content-Type 为multipart/form-data
						headers = {
							'Content-Type': 'multipart/form-data'
						};
						// 取消qs参数转换
						return params;
					}
				],
				// 上传进度
				onUploadProgress({ loaded, total }) {
					let p = ((loaded / total) * 100).toFixed(0) + '%';
					console.log(p);
				}
			}).then(res => console.log(res));
		},
		getServerImgSrc(d) {
			console.log(d);
			if (d != '') {
				this.defSrc = d;
			} else {
				alert('上传失败');
			}
		},
		saveChangePageInfo() {
			var pdata = this.currentPage;
			var data = this.$store.state.pageData;
			data.data.forEach(item => {
				if (item.pageId == pdata.pageId) {
					item = pdata;
				}
			});
			var data2 = JSON.parse(JSON.stringify(data));
			this.$store.commit('savePageData', JSON.parse(JSON.stringify(data2)));
			window.localStorage.setItem('pagedata', JSON.stringify(data2));
			console.log(data2);
			this.$confirm('保存信息成功, 是否跳转到页面列表?', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					this.$router.push('/list');
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消跳转'
					});
				});
		}
	}
};
</script>

<style lang="stylus" scoped>
.info-wrapper
	width 1200px
	margin 0 auto
	margin-top 30px
.left-show
	width 375px
	height 667px
	background #fff
	overflow-y auto
	margin-right 20px
	float left
	img
		display block
		width 100%
	ul
		width 98%
		margin 0 auto
		li
			padding 20px 10px
			border-bottom 1px solid #aaa
.title
	background darkblue
	color #FFFFFF
	padding 10px 10px
	font-size 18px
	line-height 1.6
.right-show
	width 805px
	height 500px
	background #FFFFFF
	float right
.right-title
	height 60px
	line-height 60px
	padding 0 20px
	color #888
	font-size 18px
	border-bottom 1px solid #c0c0c0
.content-wrapper
	padding 20px
	overflow hidden
.cover-wrapper
	width 250px
	height 250px
	background #42B983
	float left
	position relative
	img
		width 100%
		height 100%
.change-cover
	width 100%
	position absolute
	left 0
	bottom 0
	line-height 35px
	background #080808
	color #fff
	text-align center
	font-size 14px
	font-style italic
	cursor pointer
.change-information
	width 480px
	float right
	.from-item
		display flex
		align-items center
		margin-bottom 15px
		padding-right 30px
		span
			display inline-block
			width 100px
			font-size 16px
			color #a0a0a0
.upload-img
	position relative
	left -17px
.img-proposal
	font-size 12px
	color #ACACAC
.selectone
	position relative
	width 100%
.desc-title
	padding-top 5px
.btm-wrapper
	width 765px
	margin 0 auto
	padding 20px
	background #fff
	overflow hidden
.btn-wrapper
	float right
.edit-btn
	display inline-block
	width 120px
	height 50px
	line-height 50px
	background #42B983
	color #fff
	text-align center
	cursor pointer
	margin-right 15px
.save-btn
	display inline-block
	width 120px
	height 50px
	line-height 50px
	background #409EFF
	color #fff
	text-align center
	cursor pointer
.uploadstyle, position absolute, width 100%, top 214px, height 36px
	background #fff
</style>
