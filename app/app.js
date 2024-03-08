import Vue from 'nativescript-vue'
import Nav from './components/Nav'

new Vue({
  render: (h) => h('frame', [h(Nav)]),
}).$start()
