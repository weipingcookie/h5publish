//自动挂载当前路径下的.vue组件,在其他组件内可以直接使用不需要import 

import Vue from 'vue'

function changeStr(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const requireComponent = require.context('./',false,/\.vue$/);
console.log(requireComponent.keys())
const install = (Vue) =>{
	requireComponent.keys().forEach(fileName =>{
		let config = requireComponent(fileName);
		let componentName = changeStr(
			fileName.replace(/^\.\//,'').replace(/\.\w+$/,'')
		)
		Vue.component(componentName,config.default || config);
	});
}

export default {
	install
}

