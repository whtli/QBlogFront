<template>
  <div>
    <div>
      <Head></Head>
    </div>
    <div style="margin-top: 5%" align="center">
      <div class="ui top segment" style="text-align: center; width: 96%">
        <h2 class="m-text-500">共 {{ categoryList.length }} 个分类</h2>
      </div>

      <div align="center">
        <el-row style="margin: 5px">
          <el-col :span="6" v-for="(category, index) in categoryList" :key="index"
                  style=" width: 30%; margin: 20px">
            <el-card :body-style="{ padding: '0px' }" style="margin: 10px">
              <img style="margin-top: 10px" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                   class="image">
              <div style="padding: 14px;">
                <router-link :to="`/category/${category.id}`">
                  {{ category.categoryName }} ( {{ blogCount[index] }} 篇 )
                </router-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!--      <div align="center" style="display: flex; justify-content: space-around; margin:0 auto;">-->
      <!--        <div v-for="(category, index) in categoryList"-->
      <!--             style="width: 20%; height: 120px ;background-color: white; padding: 50px; text-align: center;">-->
      <!--          <router-link :to="`/category/${category.id}`">-->
      <!--            {{ category.categoryName }} ( {{ blogCount[index] }} 篇 )-->
      <!--          </router-link>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
  import {getCategoryDetail} from "@/api/category";
  import Head from '@/components/Head'

  export default {
    name: "Category",
    components: {Head},
    data() {
      return {
        categoryList: [],
        blogCount: [],
        blogList: [],
        totalPage: 0
      }
    },
    created() {
      this.getCategoryDetail()
    },
    methods: {
      // 获取分类和标签
      getCategoryDetail() {
        getCategoryDetail().then(res => {
          this.categoryList = res.data.categoryList
          this.blogCount = res.data.blogCount
        })
      }
    }
  }
</script>

<style scoped>

</style>
