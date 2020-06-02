<template>
	<div class="outer-wrap">
		<div class="login-wrap">
			<h2 class="title">系统登录</h2>
			<el-form :model="form" :rules="rules" ref="form">
				<el-form-item prop="uname">
					<el-input v-model="form.uname" class="input" type="text" placeholder="用户名" clearable prefix-icon="el-icon-user"></el-input>
				</el-form-item>
				<el-form-item prop="pwd">
					<el-input v-model="form.pwd" class="input" type="password" placeholder="密码" clearable show-password prefix-icon="el-icon-key"></el-input>
				</el-form-item>
				<el-form-item><el-button @click="login('form')" class="button" type="primary" size="medium">登录</el-button></el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				uname: '',
				pwd: ''
			},
			rules: {
				uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 6, max: 12, message: '用户名要求6-12个字符', trigger: 'blur' }],
				pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 8, message: '密码要求6-8个字符', trigger: 'blur' }]
			}
		};
	},
	methods: {
		login(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					const loading = this.$loading({
						lock: true,
						text: '正在登录',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
						loading.close();
						this.$router.push({ path: '/list' });
					}, 1000);
					// this.Axios.get('/api/data.json').then(res => {
					// 	console.log(res.data.result);
					// 	if (res.data.result) {
					// 		setTimeout(() => {
					// 			loading.close();
					// 			this.$router.push({ path: '/list' });
					// 		}, 1000);
					// 	}
					// });
				} else {
					console.log('error submit!!');
					return false;
				}
			});
			// console.log(this.uname, this.pwd);
			// this.$router.push({path:'/index'})
		}
	}
};
</script>

<style lang="stylus" scoped>
.outer-wrap
	width 100%
	height 100vh
	position relative
	background #409EFF
.login-wrap
	width 350px
	border 1px solid #fff
	position absolute
	top 50%
	left 50%
	transform translateX(-50%) translateY(-50%)
	padding 20px
	background #fff
	box-shadow 3px 3px #080808
	border-radius 3px
.title
	font-size 20px
	margin-bottom 30px
	margin-top 20px
.input
	margin-bottom 20px
.button
	width 100%
	margin-bottom 20px
</style>
