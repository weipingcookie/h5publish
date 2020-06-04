<template>
	<div>
		<div class="header">
			<div class="header-left">
				<img class="logo" src="../../assets/images/logo-1.png">
				<h4 class="title">看见发布平台</h4>	
			</div>
			<div class="header-right">
				<div class="exit">
					<i class='el-icon-arrow-right'></i>
					<span>退出</span>
				</div>
			</div>
		</div>
		<el-container>
			<div class="aside">
				<ul>
					<li>专题</li>
				</ul>
			</div>
			<div class="model-wrapper">
				<div class="preview-wrap">
					<span class='p-text'>快反模板</span>
					<div class="edit-page-title"><span>当前编辑页面：</span>{{pageCode.title}}</div>
					<div class='btn-wrap'>
						<el-button @click="saveModelData" type='primary' icon="el-icon-document-copy" size="mini">保存</el-button>
						<el-button @click="goPreview" type="primary" icon="el-icon-zoom-in" size="mini">预览</el-button>
												<el-button @click="goPublish" type="primary" icon="el-icon-zoom-in" size="mini">发布</el-button>
					</div>
				</div>
				<div class="nav-wrapper">
					<ul class="nav">
						<li @click='getModelCateGoryData(item,index)' :class="item.style" v-for="(item,index) in serverModelData" :key="index">{{item.cateGoryName}}</li>
					</ul>
					<el-button @click='deleteAll' icon="el-icon-delete" type='danger' size="small">一键删除</el-button>
				</div>
				<el-container>
					<div class="left-wrapper">
					<div class="model-left">
						<vue-scroll :ops='vuescroll'>
						<div class="model-default">
							<div @click="getModelConfigure(index)" v-for="(item,index) in modeldata.modelData" :key="index">
								<div class="model-title">{{item.title}}</div>
								<component :is="modeldata.type" :title=item.title :modelData="item.contentData" ></component>
							</div>
						</div>
						</vue-scroll>
					</div>
					</div>
					<div class="model-middle">
						<div class="mobile-preview">
							<div class="mobile-top-part">
								<div class="mobile-status">
									<span>······</span>
									<span>18:20</span>
									<span>75%</span>
								</div>
							</div>
							<!-- <vue-scroll :ops='vuescroll'> -->
							<div class="mobile-view">
								<div class="container">
								    <div class="round"></div>
								    <div class="longround"></div>
								    <div class="screen">
										<draggable element="ul" v-model="pageModelData">
										<div ref="preivewCode" @click="getConfig(pageitem.contentData,pageitem.title,pageitem.config,pageindex)" v-for="(pageitem,pageindex) in pageModelData" :key='pageindex'>
											<component :is="pageitem.type" :modelData="pageitem.contentData"></component>
										</div>
										</draggable>
									</div>
								     <div class="home"></div>
								</div>
							
							</div>
							<!-- </vue-scroll> -->
							<div class="mobile-btm-part"></div>
						</div>						
					</div>
					<div class="model-set-wrap">
						<config @clearConfig='clearConfig' :config='configData' :data='settingConfig' :show="settingConfig==''?false:true" :name='settingConfig.name' :configs="settingConfig"></config>
					</div>
				</el-container>
			</div>
		</el-container>	
	</div>
</template>

<script>
require('../../assets/css/iphone.css')
	import config	from '../../components/config/config.vue'
	import draggable from 'vuedraggable'
 	export default{
		data(){
			return{
				modeldata:[],
				navdata:[
					{
						id:0,
						text:"焦点图",
						style:'active'
					},
					{
						id:1,
						text:"图片"
					},
					{
						id:2,
						text:"导航"
					},
					{
						id:3,
						text:"文字"
					},
					{
						id:4,
						text:"搜索"
					},
					{
						id:6,
						text:"视频"
					},
					{
						id:7,
						text:"顶通"
					},
					{
						id:8,
						text:"底通"
					},
					{
						id:9,
						text:"返回顶部"
					},
					{
						id:10,
						text:"自定义代码"
					},
					{
						id:11,
						text:"接口模块"
					}
				],
				pageData:[],
				settingConfig:"",
				configData:"",
				vuescroll:{
					bar:{
						background:'rgb(93,135,255)'
					}
				},
				currentIndex:0
			}
		},
		methods:{
			getModelType(type,data,name){
				console.log('获得当前选取模块:'+name)
				//左侧模块数据解除双向绑定
				let obj = JSON.parse(JSON.stringify(this.bannerData)) 
				this.bannerData = obj
				//添加到页面模块数据
				this.pageData.push({type:type,data:data,name:name})
			},
			getConfig(item,name,config,index){
				let data=[]
				//settingConfig存储当前操作模块数据
				item.forEach(i=>{
					data.push(i)
				})
				this.settingConfig = data
				this.settingConfig.name = name
				this.configData = config
				this.$store.commit('changeModelIndex',index)
			},
			getModelCateGoryData(item,index){
				this.currentIndex = index
				this.modeldata = item
				this.$store.commit('setActive',index)
			},
			getModelConfigure(index){
				let cindex = this.currentIndex
				this.$store.commit('getPageModelData',{index:index,cindex:cindex})
			},
			saveModelData(){
				console.log(this.$refs.preivewCode)
			},
			clearConfig(){
				this.settingConfig = ''
			},
			goPreview(){
				// var data = this.$refs.preivewCode
				// this.$router.push({path:'/preview',query:{data:data}})
				this.$router.push('/preview')
			},
			goPublish(){  //跳转到发布
				this.$router.push('/publish')
			},
			deleteAll(){  //删除所有模块
				this.$store.commit('deleteCurrentModel',[])
			}
		},
		components:{
			config,
			draggable
		},
		created(){
			this.$store.commit('getCurrentPageData',Number(this.$route.query.pid))
		},
		mounted(){
			this.getModelCateGoryData(this.$store.state.serverModelData[0],0)
		},
		computed:{
			serverModelData(){   //模块数据
				return this.$store.state.serverModelData
			},
			pageModelData:{  //当前编辑模块数据
				get(){
					return this.$store.state.currentModelData
				},
				set(val){
					this.$store.state.currentModelData = val
				}
				
			},
			pageCode(){  //当前编辑页面数据
				return this.$store.state.currentPageData
			}
		}
	}
</script>

<style lang="stylus" scoped>
.header
	width 100%
	height 50px
	background #409EFF
	display flex
	justify-content space-between
.logo
	width 133px
	margin-left 10px
.header-left
	display flex
	align-items center
.title
	font-size 26px
	color #fff
	margin-top 9px
	margin-left 6px
.exit
	width 80px
	line-height 50px
	background #382abf
	display flex
	justify-content center
	align-items center
	color #fff
	font-size 14px
	cursor pointer
.aside
	width 40px
	height calc(100vh - 110px)
	background #050314
	color #fff
	text-align center
	font-size 12px
	padding-top 60px
.model-wrapper
	width 100%
	height calc(100vh - 50px)
.preview-wrap
	width 100%
	height 40px
	line-height 40px
	background #fff
	padding-left 20px
	display flex
	justify-content space-between
.p-text
	font-size 16px
	color #aaa
.btn-wrap
	margin-right 80px
.nav-wrapper
	padding 0 20px
	height 35px
	line-height 33px
	background #dbe4fd
	padding-top 2px
	display flex
	justify-content space-between
	padding-right 40px
.nav
	display flex
	li
		font-size 14px
		text-align center
		padding 0 15px
		color #777
		border-bottom 2px solid transparent
		cursor pointer
		&:hover
			color #3d6bf0
			border-bottom 2px solid #3d6bf0
		&.active
			color #3d6bf0
			border-bottom 2px solid #3d6bf0
.left-wrapper
	width 300px
	height 100vh
	background #fff
	overflow hidden
.model-left
	width 300px
	height 80vh
	background #fff
	overflow hidden
.model-default
	margin 10px 10px 0 10px
.mobile-preview
	width 375px
	height 667px
	// border-radius 15px
	// background #fff
	// box-shadow 0 0 18px #999
	// transform scale(.8)
	margin 0 auto
	margin-top -20px
	// margin-top -40px
	// border-bottom-left-radius 0px
	// border-bottom-right-radius 0px
.model-set-wrap
	width 350px
	height 100vh
	background #fff
.model-middle
	flex 1
.model-title
	line-height 30px
	background #999999
	padding 0 5px
.mobile-top-part
	display none
	width 100%
	height 40px
	line-height 40px
	color #fff
	border-top-left-radius 15px
	border-top-right-radius 15px
	background #000
	overflow hidden
.mobile-btm-part
	display none
	width 100%
	height 40px
	line-height 40px
	color #fff
	border-bottom-left-radius 15px
	border-bottom-right-radius 15px
	background #000
	overflow hidden
.mobile-status
	display flex
	justify-content space-between
	padding 0 12px
	color #fff
.edit-page-title
	color #080808
	font-size 14px
	span
		font-size 12px
		color #777
</style>
