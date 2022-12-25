<template>
  <div>
    <div>
      <Head></Head>
    </div>
    <div style="margin-top: 5%" align="center">
      <div class="ui top segment" style="text-align: center; width: 96%">
        <h2 class="m-text-500">共 {{ tagList.length }} 个标签</h2>
      </div>

      <div align="left">
        <el-row style="margin-left: 10%">
          <el-col :span="6" v-for="(tag, index) in tagList" :key="index" style="width: 20%; margin: 20px">
            <div :body-style="{ padding: '0px' }" class="row m-padded-tb-no">
<!--              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
              <div style="padding: 14px;" class="column m-padding-left-no">
                <router-link :to="`/tag/${tag.id}`" class="ui tag label m-text-500 m-margin-small" :class="tag.color">
                  {{ tag.tagName }}  ( {{ blogCount[index] }} 篇 )
                </router-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import {getTagDetail} from "@/api/tag";
  import Head from '@/components/Head'

  export default {
    name: "Tag",
    components: {Head},
    data() {
      return {
        tagList: [],
        blogCount: [],
        blogList: [],
        totalPage: 0
      }
    },
    created() {
      this.getTagDetail()
    },
    methods: {
      // 获取分类和标签
      getTagDetail() {
        getTagDetail().then(res => {
          this.tagList = res.data.tagList
          this.blogCount = res.data.blogCount
        })
      }
    }
  }
</script>

<style scoped>

</style>
