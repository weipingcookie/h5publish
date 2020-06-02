<template>
	<div v-if="show" class="set-wrapper">
		<div class="config-topbar">
			<span>
				当前操作模块：
				<span class="name">{{ name }}</span>
			</span>
			<span class="deleteModel">
				<el-tooltip class="item" effect="dark" content="删除这个模块" placement="left-start"><i @click="itemDelete(index)" class="el-icon-delete delete"></i></el-tooltip>
			</span>
		</div>

		<div class="config-content">
			<vue-scroll :ops="vuescroll">
				<el-collapse>
					<el-collapse-item title="内容设置:">
						<div v-for="(item, index) in data" :key="index">
							<div class="item-name">
								<span>{{ item.title }}</span>
								<el-tooltip class="item" effect="dark" content="点击删除此项" placement="left-start">
									<i @click="updataModelData(index)" class="el-icon-delete delete"></i>
								</el-tooltip>
							</div>
							<div><el-input v-model="item.content" :value="item.content"></el-input></div>
							<div class="item-name"><span>图片链接</span></div>
							<div class="link-wrap">
								<img :src="item.img_url" alt="" />
								<el-input :placeholder="item.img_url.toString()">
									<template slot="prepend">
										图片链接:
									</template>
								</el-input>
								<div class="uploadimg" @click="getIndex(index)">
									本地上传：<uploadimg  @getServerImgSrc='setModelpic'></uploadimg>
								</div>
							</div>
						</div>
					</el-collapse-item>
				</el-collapse>
				<el-collapse>
					<el-collapse-item title="模块样式:">
						<div v-for='(item,index) in config' :key='index' class="config-wrap" >	
						<div>{{item.styleTitle}}</div>
						<component :is="item.control"></component>
						</div>
					</el-collapse-item>
				</el-collapse>
			</vue-scroll>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../../unitls/eventBus.js';
require('../../unitls/remove.js')
export default {
	name: 'config',
	props: ['configs', 'name', 'show', 'data','config'],
	methods: {
		changeTitle() {
			this.data.data.title = '123' + Math.random() * 10;
		},
		itemDelete(index) {
			console.log(this.modelIndex)
			var data = [];
			data = JSON.parse(JSON.stringify(this.$store.state.currentModelData))
			data.splice(this.modelIndex,1)
			this.$store.commit('changeCurrentModelData',data)
			this.$emit('clearConfig')

		},
		updataModelData(index) {
			this.$store.commit('updataModelData', index);
			this.$refs.swipe.reset();
		},
		setModelpic(src){
			var index = this.index
			console.log(src)
			this.data[index].img_url=src
		},
		getIndex(index){
			console.log(index)
			this.index = index
		}
	},
	mounted() {
	},
	data() {
		return {
			vuescroll: {
				bar: {
					background: 'rgb(93,135,255)'
				}
			},
			index:''
		};
	},
	computed:{
		modelIndex(){
			return this.$store.state.modelIndex
		}
	}
};
</script>

<style lang="stylus" scoped>
.set-wrapper
	padding 10px 0 10px 10px
.config-topbar
	padding 0 10px
	line-height 30px
	color #999999
	font-size 12px
	display flex
	justify-content space-between
.name
	font-size 14px
	color #000
.config-content
	padding 0 10px
	height 78vh
	overflow hidden
.item-name
	font-size 14px
	display flex
	justify-content space-between
	align-items center
	color #777777
	padding 0 15px 0 0px
	margin 10px 0
.delete
	cursor pointer
.link-wrap
	// padding 0 10px
	justify-content space-between
	align-items flex-start
	flex-direction column
	margin-bottom 20px
	padding-bottom 20px
	border-bottom 1px solid #ddd
	img
		width 100px
		display block
		margin-right 5px
		margin-bottom 10px
.config-wrap
	margin-bottom 10px
.uploadimg
	display flex
	justify-content space-between
	width 100%
	line-height 50px
	padding 0 3px
</style>
