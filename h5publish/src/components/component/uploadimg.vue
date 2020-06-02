<template>
	<div><input class="upimgbtn" type="file" @change="getFile" value="图片上传" :serveSrc="imgSrc" /></div>
</template>

<script>
export default {
	name: 'uploadimg',
	data() {
		return {};
	},
	props: {
		imgSrc: {
			type: String,
			default: ''
		}
	},
	methods: {
		getFile(f) {
			const loading = this.$loading({
				lock: true,
				text: '图片上传中',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.7)'
			});
			let file = f.target.files[0];
			let param = new FormData(); //创建form对象
			param.append('imgFile', file, file.name); //通过append向form对象添加数据
			let config = {
				headers: { 'Content-Type': 'multipart/form-data' }
			}; //添加请求头  地址是后端临时测试用地址
			this.Axios.post('http://172.20.169.32:8080/CMS/uploadOneImgtopicUpLoadImg', param, config)
				.then(response => {
					if (response.data.url != '') {
						this.$emit('getServerImgSrc', response.data.url);
						loading.close();
					}
				})
				.catch(() => {
					this.$alert('图片上传失败', '服务器未响应', {
						confirmButtonText: '退出'
					});
					//发送默认图片查看效果
					var src = require('../../../static/images/default.jpg');
					this.$emit('getServerImgSrc', src);
					loading.close();
				});
		}
	}
};
</script>

<style>
.upimgbtn {
	width: 100%;
	height: 36px;
	cursor: pointer;
}
</style>
