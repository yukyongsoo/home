Vue.use(Vuetify);

httpVueLoader.httpRequest = function(url) {
    return axios.get(url)
    .then(function(res) {
        return res.data;
    })
    .catch(function(err) {
        return Promise.reject(err.status);
    });
}

httpVueLoader.register(Vue, 'view/contact-component.vue');
httpVueLoader.register(Vue, 'view/logo-component.vue');
httpVueLoader.register(Vue, 'view/dev-component.vue');
httpVueLoader.register(Vue, 'view/history-component.vue');
httpVueLoader.register(Vue, 'view/short-component.vue');
httpVueLoader.register(Vue, 'view/skill-component.vue');
httpVueLoader.register(Vue, 'view/hisdetail-component.vue');

Vue.component('contact-component');
Vue.component('logo-component');
Vue.component('dev-component');
Vue.component('history-component');
Vue.component('short-component');
Vue.component('skill-component');
Vue.component('hisdetail-component');

Vue.component('loading-screen', {
	  template: '<span :title="isLoading"></span>',
	  props: ['isLoading'],
	  data () {
	    return {
	      pleaseWaitInstance: null
	    }
	  },
	  mounted () {
	    this.updatePleaseWait()
	  },
	  beforeUpdate () {
	    this.updatePleaseWait()
	  },
	  methods: {
	    updatePleaseWait () {
	      if (this.isLoading && this.pleaseWaitInstance == null) {
	        this.pleaseWaitInstance = pleaseWait({
	          logo: '/assets/Spinner.gif',
	          backgroundColor: '#6799FF',
	          loadingHtml: '<p style="color : white;">방문해 주셔서 감사합니다!! 잠시만 기다려주세요!!</p>'
	        })
	      }
	      if (!this.isLoading && this.pleaseWaitInstance != null) {
	        this.pleaseWaitInstance.finish()
	      }
	    }
	  }
})


var main = new Vue({
	 data: {
		    isLoading: true
	 }, 
	 mounted () {
		 setTimeout(() => {
			 this.isLoading = false
		 }, 5000)
	 }
}).$mount('#app')

