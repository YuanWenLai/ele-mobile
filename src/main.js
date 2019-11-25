// src/main.js
import Vue from 'vue';

const say = function () {
	return new Promise((resolve, reject) => {
		resolve('I am es6');
	})
}


var app = new Vue({
	el: '#app',
	data: {
		msg: 'Hello Vue@2.0!'
	},
	methods: {
		
	},
})
