
import Vue from 'vue'

/**** Font awesome ****/

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import icons from './lib/icons'
icons.register();
Vue.component('icon', FontAwesomeIcon);

/**** Vue Modal ****/
import VModal from 'vue-js-modal'
Vue.use(VModal)

/**** Vue Comps ****/
import Contact from './components/Contact';
import Education from './components/Education';
import MainFooter from './components/Footer';
import History from './components/History';
import Links from './components/Links';
import LinkItem from './components/Link';
import Main from './components/Main';
import Reveal from './components/Reveal';
import Sidebar from './components/Sidebar';
import Skill from './components/Skill';
import Skills from './components/Skills';
import Work from './components/Work';

Vue.component('Contact', Contact);
Vue.component('Education', Education);
Vue.component('MainFooter', MainFooter);
Vue.component('History', History);
Vue.component('Links', Links);
Vue.component('LinkItem', LinkItem);
Vue.component('MainContent', Main);
Vue.component('Reveal', Reveal);
Vue.component('Sidebar', Sidebar);
Vue.component('Skill', Skill);
Vue.component('Skills', Skills);
Vue.component('Work', Work);

/**** Vue App ****/

new Vue({
  el: '#app'
})
