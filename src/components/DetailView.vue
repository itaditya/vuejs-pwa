<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="this.cat.url" />
      </div>
      <div class="info">
        <span>{{ this.cat.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ this.cat.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
  },
  methods: {
    getCat () {
      console.log('a')
      if (navigator.onLine) {
        console.log('b')
        return this.$root.cat.find(cat => cat['.key'] === this.$route.params.id)
      }
      console.log('c')
      return JSON.parse(localStorage.getItem('cats')).find(cat => cat['.key'] === this.$route.params.id)
    }
  },
  data () {
    return {
      cat: this.getCat()
    }
  }
}
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>
