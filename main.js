Vue.use(Vuetify, {
    theme: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
});

httpVueLoader.httpRequest = function (url) {
    return axios.get(url)
        .then(function (res) {
            return res.data;
        })
        .catch(function (err) {
            return Promise.reject(err.status);
        });
}

httpVueLoader.register(Vue, 'view/logo-component.vue');
httpVueLoader.register(Vue, 'view/dev-component.vue');
httpVueLoader.register(Vue, 'view/history-component.vue');
httpVueLoader.register(Vue, 'view/short-component.vue');
httpVueLoader.register(Vue, 'view/skill-component.vue');
httpVueLoader.register(Vue, 'view/skillset-component.vue');

Vue.component('logo-component');
Vue.component('dev-component');
Vue.component('history-component');
Vue.component('short-component');
Vue.component('skill-component');
Vue.component('skillset-component');
//deprecated
//Vue.component('hisdetail-component');

var main = new Vue({

}).$mount('#app')
