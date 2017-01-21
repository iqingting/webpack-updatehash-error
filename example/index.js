import App from './app.vue'
let shopview = document.querySelector('#shopview')

new Vue({
  el: shopview,
  render: h => h(App),
})
