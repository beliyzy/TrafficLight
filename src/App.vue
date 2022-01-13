<template>
  <div id="app">
    <div class="traffic-light">
      <Lamp path='/red' class='red' :isActive="this.$store.state.redIsActive"/>
      <Lamp path='/yellow' class='yellow' :isActive="this.$store.state.yellowIsActive"/>
      <Lamp path='/green' class='green' :isActive="this.$store.state.greenIsActive"/>
    </div>
    <h3>Made by @beliyzy</h3>
  </div>
</template>

<script>
import Lamp from "./components/Lamp.vue";

export default {
  name: "App",
  methods: {
    switchTimeout: function (path, commit, dur) {
     setTimeout(() => {
        this.$store.commit(commit);
        this.$router.push(path);
      }, dur * 1000)
    },
    setColor: function (currPath, prevPath) {
      if (currPath === '/red') {
        this.switchTimeout('/yellow', 'switchToYellow', this.$store.state.redDuration)
      } else if (currPath === '/yellow' && prevPath === '/red') {
        this.switchTimeout('/green', 'switchToGreen', this.$store.state.yellowDuration)
      } else if (currPath === '/green') {
        this.switchTimeout('/yellow', 'switchToYellow', this.$store.state.greenDuration)
      } else if (currPath === '/yellow' && prevPath === '/green') {
        this.switchTimeout('/red', 'switchToRed', this.$store.state.yellowDuration)
      }
    }
  },
  computed: {
    paths: function () {
      return this.$route.path;
    }
  },
  created() {
    this.setColor(this.paths, '/red');
  },
  watch: {
    paths(currPath, prevPath) {
      this.setColor(currPath, prevPath);
    }
  },
  mounted() {
    if (this.$route.path === '/red') {
      this.$store.commit('switchToRed')
    } else if (this.$route.path === '/yellow') {
      this.$store.commit('switchToYellow')
    } else if (this.$route.path === '/green'
    ) {
      this.$store.commit('switchToGreen')
    }
  },
  components: {
    Lamp,
  }
}
</script>

<style>
#app {
  margin-top: 50px;
}

.traffic-light {
  height: 300px;
  width: 90px;
  margin: 0 auto;
  background-color: rgb(15, 12, 12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: #1fff1f;
}

h3 {
  text-align: center;
}
</style>
