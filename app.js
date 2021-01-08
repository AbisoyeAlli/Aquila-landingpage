new Vue({
  el: '#app',
  data () {
    return {
      info: null,
    }
  },
  methods: {
    addTwitter() {
      let tweet = this.info.social_media.twitter;
      return 'https://twitter.com' + tweet; 
    }
  },
  mounted () {
    axios
      .get('https://hirng-x2021.glitch.me/api')
      .then(response => (this.info = response.data))
      .catch(error => console.log(error))
  }
})