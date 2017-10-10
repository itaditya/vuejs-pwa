<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="picture">
          <img :src="this.cat.url"/>
        </div>
        <div class="info">
          <span>{{ this.cat.info }}</span>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="comment">
          <span>{{ this.cat.comment }} {{ this.shareFeature}}</span>
        </div>
        <div class="actions">
          <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">ANSWER</router-link>
        </div>
      </div>
    </div>
    <div class="share-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" @click.prevent="shareCat" v-if="shareFeature">
      <i class="material-icons">share</i>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
  },
  methods: {
    getCat () {
      if (navigator.onLine) {
        return this.$root.cat.find(cat => cat['.key'] === this.$route.params.id)
      }
      return JSON.parse(localStorage.getItem('cats')).find(cat => cat['.key'] === this.$route.params.id)
    },
    shareCat () {
      if (this.shareFeature) {
        navigator.share({
          title: this.cat.info,
          text: `${this.cat.comment}\n`,
          url: this.cat.url
        })
      }
    }
  },
  data () {
    return {
      cat: this.getCat(),
      shareFeature: navigator.share !== undefined
    }
  }
}
</script>
<style scoped>
  .share-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
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
