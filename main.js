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

var main = new Vue({

}).$mount('#app')

