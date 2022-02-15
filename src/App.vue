<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      // 监听刷新事件
      window.addEventListener('unload', this.saveState);
    },
    methods: {
      saveState() {
        // sessionStorage只能存字符串
        sessionStorage.setItem('state', JSON.stringify(this.$store.state));
      }
    }
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
