<template>
  <div>
    会员等级 ID={{id}}
  </div>
</template>

<script>
export default {
  props:['id'],
  name: "MemberList",
  beforeRouteEnter: (to,from,next) => {
    console.log("进入会员等级");
    next(
        vm => {
          vm.getData();
        }
    );   // 跳到下一个钩子函数或路由
  },
  beforeRouteLeave: (to,from,next) => {
    console.log("离开会员等级");
    next();
  },
  methods: {
    getData:function () {
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/data.json'
      }).then(function (repos) {
        console.log(repos);
      }).catch(function (error) {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>