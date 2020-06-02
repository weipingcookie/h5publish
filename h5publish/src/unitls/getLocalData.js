import Vue from 'vue'
import store from '../store/index.js'

function setDefaultData(){
	if(window.localStorage.getItem('pagedata')!=null){
		store.commit('savePageData',JSON.parse(window.localStorage.getItem('pagedata')))
	}else{
		let data = JSON.parse(JSON.stringify(store.state.pageData));
		store.commit('savePageData', JSON.parse(JSON.stringify(data)));
		window.localStorage.setItem('pagedata', JSON.stringify(data));
	}
	
}

export default setDefaultData;