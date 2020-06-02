<template>
	<div>
<!-- 		<div v-for='(item,index) in dataArray' :key='index'>
				<div v-html="item"></div>
		</div> -->
		<div class='select-wrap' :style="{width:index[0]+'px'}">
			<el-select @change="selsize" class="selecttwo" v-model="size" placeholder="请选择机型分辨率">
<!-- 				<el-option label="选择分辨率" value="1"></el-option>
				<el-option label="已发布" value="2"></el-option> -->
				<el-option v-for="(item,index) in sel" :key="index" :label="item.val" :value="item.data" ></el-option>
			</el-select>
		</div>
		<div class='wrap' :style="{width:index[0]+'px',height:index[1]+'px'}">
		<vue-scroll :ops='vuescroll'>
		<div class="preview-wrap" :style="{width:index[0]+'px',height:index[1]+'px'}">
		<div ref="preivewCode" v-for="(pageitem,pageindex) in pageModelData" :key='pageindex'>
			<component :key="key"  :is="pageitem.type" :modelData="pageitem.contentData"></component>
		</div>
		</div>
		</vue-scroll>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				dataArray:[],
				show:false,
				vuescroll:{
					bar:{
						background:'rgb(93,135,255)'
					}
				},
				size:'iphone6、7、8',
				sel:[
					{
						size:'375*667',
						data:[375,667],
						val:"iphone6、7、8"
					},
					{
						size:'414*812',
						data:[414,812],
						val:"iphone6、7、8plus"
					}
				],
				index:[375,667],
				key:0
			}
		},
		created(){
			// var data = this.$route.query.data
			// data.forEach((item)=>{
			// 	this.dataArray.push(item.innerHTML)
			// })
			// console.log(this.dataArray)
			// this.show=true
		},
		computed:{
			serverModelData(){
				return this.$store.state.serverModelData
			},
			pageModelData(){
				return this.$store.state.currentModelData
			},
			pageCode(){
				return this.$store.state.currentPageData
			}
		},
		methods:{
			selsize(val){
				console.log(val)
				this.index=[];
				this.index.push(val[0])
				this.index.push(val[1])
				console.log(this.index)
				this.key+=1;
			}
		}
	}
</script>

<style lang="stylus" scoped>
.preview-wrap
	width 375px
	margin 0 auto
.wrap
	width 375px
	height 600px
	margin 0 auto
	overflow hidden
.select-wrap
	width 380px
	margin 0 auto
	margin-top 50px
.selecttwo
	width 100%
</style>
