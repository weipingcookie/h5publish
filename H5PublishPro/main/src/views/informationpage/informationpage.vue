<template>
	<div>
		<topnav></topnav>
		<div class="info-wrapper">
			<div class="left-show">
				<vue-scroll  :ops='vuescroll'>
				<img src="../../assets/images/banner.jpg">
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
			<div class="right-top">
				<div class="page-title">
					<span class="p-title">{{currentPage.title}}</span>
					<div class="setting-wrapper">
						<span @click="goSettingPage">页面设置</span>
						<span>发布页面</span>
					</div>
				</div>
			</div>
			<div class="right-bottom">
				<div class="page-type">
					<span>{{currentPage.channelCatory}}</span>
				</div>
				<div class="popu-wrapper">
					<div class="popu-left">
						<div class="wx-share-title">
							<span class="number">1</span>
							<span class="number-title">微信分享</span>
						</div>
						<div class="left-code">
							<img :src="currentPage.codeimg">
							<span class="share-title">现在扫一扫马上分享到朋友圈！</span>
						</div>
					</div>
					<div class="popu-right">
						<div class="wx-share-title">
							<span class="number">2</span>
							<span class="number-title">页面网址</span>
						</div>
						<div class="web-src">
							<span class="src-text">http://webapp.cctv.com/h5/guojiadajuyuanproject/index.html</span>
							<el-button class="preview">点击预览</el-button>
						</div>
					</div>
				</div>
				<div class='edit-wrapper'>
					<span @click="goEditPage(currentPage.pageId)" class="edit-btn">编辑页面</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import topnav from '../../components/nav/nav.vue'
	export default{
		data(){
			return{
				vuescroll:{
					bar:{
						background:'rgb(93,135,255)'
					}
				}
			}
		},
		components:{
			topnav
		},
		methods:{
			goSettingPage(){
				this.$router.push({path:'/settingpage',query:{pid:Number(this.$route.query.pid)}})
			},
			goEditPage(id){
				this.$router.push({path:'/editpage',query:{pid:id}})
			}
		},
		computed:{
			currentPage(){
				return this.$store.state.currentPageData
			}
		},
		created(){
			this.$store.commit('getCurrentPageData',Number(this.$route.query.pid))
		}
	}
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
.right-top
	width 765px
	padding 0 20px
	height 60px
	background #FFFFFF
	line-height 60px
	float right
.right-bottom
	width 805px
	background #fff
	float right
	margin-top 10px
.page-title
	font-size 20px
	color #a0a0a0
	display flex
	justify-content space-between
.page-type
	height 60px
	line-height 60px
	padding 0 20px
	color #888
	font-size 18px
	border-bottom 1px solid #c0c0c0
.popu-wrapper
	padding 0 25px
	margin-top 15px
	overflow hidden
.popu-left
	float left
	width 350px
	margin-right 30px
.wx-share-title
	display flex
	align-items center
.number
	width 37px
	height 30px
	line-height 30px
	font-size 16px
	margin-right 10px
	text-align center
	background #409EFF
	color #fff
	display inline-block
.number-title
	width 100%
	display inline-block
	padding 0 10px
	font-size 14px
	height 30px
	line-height 30px
	background #efefef
	color #999
.left-code
	width 321px
	float right
	margin-top 20px
	img
		display block
		width 100%
.share-title
	margin-top 10px
	display inline-block
	text-align center
	width 100%
	color #aaa
	font-size 14px
.web-src
	margin-top 40px
	display flex
	justify-content space-between
	align-items center
.preview
	color #42B983
.src-text
	width 70%
	overflow hidden
	text-overflow ellipsis
	white-space nowrap
.edit-wrapper
	width 100%
	border-top 1px solid #a0a0a0
	overflow hidden
	margin-top 20px
	padding 20px 0px
.edit-btn
	width 120px
	height 40px
	line-height 40px
	background #42B983
	color #fff
	text-align center
	cursor pointer
	display block
	float right
	margin-right 20px
.setting-wrapper
	span
		font-size 16px
		margin 0 10px
		cursor pointer
.p-title
	font-size 16px
	width 70%
	overflow hidden
	text-overflow ellipsis
	white-space nowrap
</style>
