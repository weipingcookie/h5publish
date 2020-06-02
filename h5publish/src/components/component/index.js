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

