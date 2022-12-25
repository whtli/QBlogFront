<template>
  <div>
    <div style="margin-bottom: 10px">
      <Head></Head>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/Head'
  export default {
    name: "Home",
    components: { Head },
    data() {
      return {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
      }
    },
    created() {

    },
    methods: {
      logout() {
        this.$store.commit("logout")
        this.$message.success("退出成功")
      }
    }
  }
</script>

<style>
  .item {
    display: inline-block;
    width: 100px;

    text-align: center;
    cursor: pointer
  }

  .item a {
    color: #1E90FF;
  }

  .item:hover {
    background-color: LightPink;
  }
</style>
