import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import BootstrapVue from 'bootstrap-vue';
import Home from '@/components/Home';

Vue.use(Router);
Vue.use(Meta, {
  keyName: 'metaInfo', // component option name to look for meta info on
  attribute: 'data-vue-meta', // attribute name added to the tag observed
  ssrAttribute: 'data-vue-meta-server-rendered', // already server rendered
  tagIDKeyName: 'vmid', // property name used to determine whether to overwrite or append a tag
});
Vue.use(BootstrapVue);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
