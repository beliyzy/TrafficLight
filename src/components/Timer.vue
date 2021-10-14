<template>
  <div class="timer">{{ currTime }}</div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      currTime: null,
    }
  },
  methods: {
    setTime: function (currPath) {
      if (currPath === '/red') {
        this.currTime = this.$store.state.redDuration
      } else if (currPath === '/yellow') {
        this.currTime = this.$store.state.yellowDuration
      } else if (currPath === '/green') {
        this.currTime = this.$store.state.greenDuration
      }
    }
  },
  created() {
    this.setTime(this.paths)
  },
  computed: {
    paths: function () {
      return this.$route.path;
    }
  },
  mounted() {
    setInterval(() => {
      this.currTime--
    }, 1000)
  },
  watch: {
    paths(currPath, prevPath) {
      this.setColor(currPath, prevPath);
    },
  }
}
</script>

<style scoped>
.timer {
  color: #000000;
  font-size: 40px;
  text-align: center;
  margin-top: 15px;
}
</style>
