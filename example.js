import Vue from 'vue'
import GitHubBadge from './src'

new Vue({
  el: '#app',
  render: h => (
    <div>
      <h1>Because I need it →</h1>
      <GitHubBadge class="github-badge" slug="egoist/vue-github-badge" />
    </div>
  )
})
