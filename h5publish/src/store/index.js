import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		serverModelData: [ //模块数据
			{
				id: 1, //模块分类id
				cateGoryName: "焦点图", //模块分类名称
				type: 'banner', //分类模块渲染到对应组件
				style: 'active', //选中的类别标识
				modelData: [{ //模块数据
						modelId: 1, //模块id
						title: '焦点图一', //模块名称
						type: 'banner', //组件名称
						contentData: [{ //模块内容
								img_url: require('../../static/images/b1.jpg'), //焦点图图片
								title: "文章标题1-1",
								id: "1",
								content: "文章标题内容1-1",
								type: 'banner'

							},
							{
								img_url: require('../../static/images/b1.jpg'),
								title: "文章标题1-2",
								id: "2",
								content: "文章标题内容1-2",
								type: 'banner'
							},
							{
								img_url: require('../../static/images/b1.jpg'),
								title: "文章标题1-3",
								id: "3",
								content: "文章标题内容1-3",
								type: 'banner'
							},
							{
								img_url: require('../../static/images/b1.jpg'),
								title: "文章标题1-4",
								id: "4",
								content: "文章标题内容1-4",
								type: 'banner'
							},
						],
						config: [{
								styleTitle: "标题大小",
								defaultSize: 14,
								min: 12,
								max: 28,
								control: 'setfont'
							},
							{
								styleTitle: "字体颜色",
								defaultColor: '#fff',
								control: 'setcolors'
							}
						]
					},
					{
						modelId: 2,
						title: '焦点图二',
						type: 'banner',
						contentData: [{
								img_url: require('../../static/images/b2.jpg'),
								title: "文章标题2-1",
								id: "1",
								content: "文章标题内容2-1",
								type: 'banner'
							},
							{
								img_url: require('../../static/images/b2.jpg'),
								title: "文章标题2-2",
								id: "2",
								content: "文章标题内容2-2",
								type: 'banner'
							},
							{
								img_url: require('../../static/images/b2.jpg'),
								title: "文章标题2-3",
								id: "3",
								content: "文章标题内容2-3",
								type: 'banner'
							},
							{
								img_url: require('../../static/images/b2.jpg'),
								title: "文章标题2-4",
								id: "4",
								content: "文章标题内容2-4",
								type: 'banner'
							},
						],
						config: [{
								styleTitle: "标题大小",
								defaultSize: 14,
								min: 12,
								max: 28,
								control: 'setfont'
							},
							{
								styleTitle: "字体颜色",
								defaultColor: '#fff',
								control: 'setcolors'
							}
						]
					}
				]
			},
			{
				id: 2,
				cateGoryName: "图片",
				type: 'banner',
				style: 'active',
				modelData: [{
					modelId: 1,
					title: '焦点图一',
					type: 'banner',
					contentData: [{
							img_url: require('../../static/images/b1.jpg'),
							title: "文章标题1-1",
							id: "1",
							content: "文章标题内容1-1"

						},
						{
							img_url: require('../../static/images/b1.jpg'),
							title: "文章标题1-2",
							id: "2",
							content: "文章标题内容1-2",
							type: 'banner'
						},
						{
							img_url: require('../../static/images/b1.jpg'),
							title: "文章标题1-3",
							id: "3",
							content: "文章标题内容1-3",
							type: 'banner'
						},
						{
							img_url: require('../../static/images/b1.jpg'),
							title: "文章标题1-4",
							id: "4",
							content: "文章标题内容1-4",
							type: 'banner'
						},
					],
					config: [{
							styleTitle: "标题大小",
							defaultSize: 14,
							min: 12,
							max: 28,
							control: 'setfont'
						},
						{
							styleTitle: "字体颜色",
							defaultColor: '#fff',
							control: 'setcolors'
						}
					]
				}]
			}
		],
		pageData: {
			code: 200,
			data: [{
					pageId: 1,
					title: "国家大剧院'春天'在线系列音乐会",
					image: require('../../static/images/p1.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'zhaozhuo',
					time: '2020-3-20',
					storage: false,
					channelCatory: '国家大剧院',
					cid: 101,
					content: {
						modelSize: 3,
						modelData: [{
							modelName: '焦点图模块',
							modelType: 'banner',
							modelContentData: [{
								title: '春天在线音乐会',
								color: '#000',
								size: '18',
								opc: 1
							}]
						}]
					},
					show: false
				},
				{
					pageId: 2,
					title: "掌门教育携手央视新闻、BOSS直聘开启万人招聘计划，共促在线教育人才发展",
					image: require('../../static/images/p2.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'zhangxiaobing',
					time: '2020-5-01',
					storage: false,
					channelCatory: '央视新闻',
					cid: 102,
					show: false
				},
				{
					pageId: 3,
					title: "B站联合毛不易发布毕业季主题曲《入海》",
					image: require('../../static/images/p3.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'wangweijia',
					time: '2020-5-19',
					storage: false,
					channelCatory: '央视新闻',
					cid: 102,
					show: false
				},
				{
					pageId: 4,
					title: "新宝骏RC-5发布官方图赏 时尚气息浓厚",
					image: require('../../static/images/p4.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'liuyuqiang',
					time: '2020-5-20',
					storage: false,
					channelCatory: '快速推广页面',
					cid: 103,
					show: false
				},
				{
					pageId: 5,
					title: "瑞幸咖啡：收到纳斯达克退市通知 计划举行听证会",
					image: require('../../static/images/p5.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'ruixiaoxin',
					time: '2020-5-20',
					storage: false,
					channelCatory: '财经频道',
					cid: 104,
					show: false
				},
				{
					pageId: 1,
					title: "国家大剧院'春天'在线系列音乐会",
					image: require('../../static/images/p1.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'zhaozhuo',
					time: '2020-3-20',
					storage: false,
					channelCatory: '国家大剧院',
					cid: 101,
					content: {
						modelSize: 3,
						modelData: [{
							modelName: '焦点图模块',
							modelType: 'banner',
							modelContentData: [{
								title: '春天在线音乐会',
								color: '#000',
								size: '18',
								opc: 1
							}]
						}]
					},
					show: false
				},
				{
					pageId: 2,
					title: "掌门教育携手央视新闻、BOSS直聘开启万人招聘计划，共促在线教育人才发展",
					image: require('../../static/images/p2.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'zhangxiaobing',
					time: '2020-5-01',
					storage: false,
					channelCatory: '央视新闻',
					cid: 102,
					show: false
				},
				{
					pageId: 3,
					title: "B站联合毛不易发布毕业季主题曲《入海》",
					image: require('../../static/images/p3.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'wangweijia',
					time: '2020-5-19',
					storage: false,
					channelCatory: '央视新闻',
					cid: 102,
					show: false
				},
				{
					pageId: 4,
					title: "新宝骏RC-5发布官方图赏 时尚气息浓厚",
					image: require('../../static/images/p4.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'liuyuqiang',
					time: '2020-5-20',
					storage: false,
					channelCatory: '快速推广页面',
					cid: 103,
					show: false
				},
				{
					pageId: 5,
					title: "瑞幸咖啡：收到纳斯达克退市通知 计划举行听证会",
					image: require('../../static/images/p5.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'ruixiaoxin',
					time: '2020-5-20',
					storage: false,
					channelCatory: '财经频道',
					cid: 104,
					show: false
				},
				{
					pageId: 1,
					title: "国家大剧院'春天'在线系列音乐会",
					image: require('../../static/images/p1.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'zhaozhuo',
					time: '2020-3-20',
					storage: false,
					channelCatory: '国家大剧院',
					cid: 101,
					content: {
						modelSize: 3,
						modelData: [{
							modelName: '焦点图模块',
							modelType: 'banner',
							modelContentData: [{
								title: '春天在线音乐会',
								color: '#000',
								size: '18',
								opc: 1
							}]
						}]
					},
					show: false
				},
				{
					pageId: 2,
					title: "掌门教育携手央视新闻、BOSS直聘开启万人招聘计划，共促在线教育人才发展",
					image: require('../../static/images/p2.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'zhangxiaobing',
					time: '2020-5-01',
					storage: false,
					channelCatory: '央视新闻',
					cid: 102,
					show: false
				},
				{
					pageId: 3,
					title: "B站联合毛不易发布毕业季主题曲《入海》",
					image: require('../../static/images/p3.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'wangweijia',
					time: '2020-5-19',
					storage: false,
					channelCatory: '央视新闻',
					cid: 102,
					show: false
				},
				{
					pageId: 4,
					title: "新宝骏RC-5发布官方图赏 时尚气息浓厚",
					image: require('../../static/images/p4.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'liuyuqiang',
					time: '2020-5-20',
					storage: false,
					channelCatory: '快速推广页面',
					cid: 103,
					show: false
				},
				{
					pageId: 5,
					title: "瑞幸咖啡：收到纳斯达克退市通知 计划举行听证会",
					image: require('../../static/images/p5.jpg'),
					codeimg: require('../../static/images/code.jpg'),
					author: 'ruixiaoxin',
					time: '2020-5-20',
					storage: false,
					channelCatory: '财经频道',
					cid: 104,
					show: false
				}
			]
		},
		modelConfigData: [{
			type: 'banner',
			modelId: 1,
			modelDefaultData: [{
					img_url: "http://img5.imgtn.bdimg.com/it/u=1830067698,1681220093&fm=26&gp=0.jpg",
					title: "文章标题1-1",
					id: "1",
					content: "文章标题内容1-1"
				},
				{
					img_url: "http://img1.imgtn.bdimg.com/it/u=1732085005,1860774618&fm=26&gp=0.jpg",
					title: "文章标题1-2",
					id: "2",
					content: "文章标题内容1-2"
				},
				{
					img_url: "http://img0.imgtn.bdimg.com/it/u=4060081109,3843838469&fm=26&gp=0.jpg",
					title: "文章标题1-3",
					id: "3",
					content: "文章标题内容1-3"
				},
				{
					img_url: "http://img3.imgtn.bdimg.com/it/u=1980574058,1319864113&fm=26&gp=0.jpg",
					title: "文章标题1-4",
					id: "4",
					content: "文章标题内容1-4"
				}
			]
		}],
		currentModelData: [], //中间页面部分正在操作的模块数据
		currentPaegData: [], //当前正在编辑页面数据
		catoryIndex: '', //页面分类标识
		showSeal: false, //封存标识 
		modelIndex: '', //当前选中的模块标识
		defaultPagination: 1, //默认显示页码
		defaultPageSize: 12,
		fenyeData: '',
		catoryNavData: [{
				name: '国家大剧院',
				id: 101
			},
			{
				name: '央视新闻',
				id: 102
			},
			{
				name: '快速推广页面',
				id: 103
			},
			{
				name: '财经频道',
				id: 104
			}
		],
		fdata: [],
		searchForName: ''
	},
	mutations: {
		updataStoreData(data) {
			this.state.storeData = data
		},
		updataPageData(data) {
			this.state.pageData = data
		},
		deletePageItem(index) {
			this.state.pageData[0].data.splice(index, 1)
		},
		setActive(item, index) {
			this.state.serverModelData.forEach(item => {
				item.style = null
			})
			this.state.serverModelData[index].style = 'active'
		},
		getPageModelData(state, {
			index,
			cindex
		}) {
			state.currentModelData.push(JSON.parse(JSON.stringify(state.serverModelData[cindex].modelData[index])))
		},
		updataModelData(index) { //更新模块默认配置项个数
			this.state.currentModelData[0].contentData.splice(index, 1)
		},
		savePageData(state, data) { //list页面数据保存
			state.pageData = data
			state.fdata = data.data
		},
		changeCatoryid(state, id) { //修改分类ID
			state.catoryIndex = id
		},
		changeSeal(state, seal) { //记录页面封存状态
			if (seal == '') {
				state.fdata.forEach((item) => {
					if (item.storage) {
						item.show = false
					}
				})
			} else {
				state.fdata.forEach((item) => {
					if (item.storage) {
						item.show = true
					}
				})
			}
		},
		savePageData2(state, data) { //点击我的页面更新页面数据
			state.fdata = data
		},
		getCurrentPageData(state, id) {
			state.currentPageData = state.pageData.data[id - 1]
		},
		changeTitleSize(state, size) { //修改焦点图一模块标题字体大小
			state.currentModelData[0].config[0].defaultSize = size + 'px'
		},
		changeTitleColor(state, color) { //修改焦点图一模块标题颜色
			state.currentModelData[0].config[1].defaultColor = color
		},
		changeModelIndex(state, index) { //记录当前正在操作的模块序号
			state.modelIndex = index
		},
		changeCurrentModelData(state, data) { //删除页面中的某个模块方法
			state.currentModelData = data
		},
		updataDefaultPagination(state, size) { //更新页码
			state.defaultPagination = size
		},
		setPageData(state) {
			var pdata = [];
			for (var i = (state.defaultPagination - 1) * state.defaultPageSize; i < state.pageData.data.length; i++) {
				if (i < 12 && state.defaultPagination == 1) {
					pdata.push(state.pageData.data[i]);
				}
				if (i > 11 && state.defaultPagination > 1) {

					pdata.push(state.pageData.data[i]);
				}
			}
			state.fdata = pdata
		},
		changeSearchForName(state, name) {
			state.searchForName = name
		},
		deleteCurrentModel(state,val){
			state.currentModelData = val
		}
	},
	actions: {},
	modules: {}
})
