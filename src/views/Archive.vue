<template>
  <div>
    <div>
      <Head></Head>
    </div>
    <div style="margin-top: 5%; display: flex">
      <div class="ui top attached segment" style="text-align: center; width: 30%; height: 100%; margin-left: 10%">
        <h2 class="m-text-500">文章归档</h2>
        <p>共计 {{ total }} 篇博客</p>
      </div>

      <div class="block" style="width: 70%">
        <el-timeline style="margin-left: 1%">
          <el-timeline-item v-for="item in blogList" :timestamp="item.createTime.substring(0, 10)" :key="item.id" placement="top">
            <el-card style="width: 70%">
              <a @click.prevent="readBlog(item.id)">
                <div >{{ item.title }}</div>
              </a>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="START" placement="top">
            <el-card style="width: 70%">
              <h4>Hello World!</h4>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <div align="center">
      <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getBlogList} from '@/api/blog'
  import Head from "../components/Head";

  export default {
    name: 'Archive',
    components: {Head},
    data() {
      return {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        blogList: []
      }
    },
    methods: {
      handleCurrentChange(val) {
        // 显示第几页
        this.pageNum = val
        this.getBlogList()
        console.log(`当前页: ${val}`)
      },
      // 查询博客列表
      getBlogList() {
        const query = {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
        getBlogList(query).then(res => {
          this.blogList = res.data.blogList
          this.total = res.data.total
        })
      },
      // 阅读指定id的文章
      readBlog(id) {
        this.$router.push(`/read/${id}`)
      }
    },
    mounted() {
      this.getBlogList()
    }
  }
</script>

<style scoped>

</style>
