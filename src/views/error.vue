<template>
  <div>
    <h1>登录失败：{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "error",
  data() {
    return {
      msg: this.$route.query.message
    }
  }
}
</script>

<style scoped>

</style>