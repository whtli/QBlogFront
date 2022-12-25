<template>
  <div>
    <div>
      <Head></Head>
    </div>
    <div style="margin-top: 5%">
      <div align="center">
        <div class="ui top segment" style="text-align: center; width: 96%">
          <h2 class="m-text-500">分类“ {{ categoryName }} ”中的博客</h2>
          <p>共 {{ total }} 篇</p>
        </div>
      </div>

      <div>
        <el-card class="box-card" v-for="item in blogList" :key="item.id"
                 style="margin: 10px auto; background-color: #fff; width: 60%; height: 300px; padding: 20px; border-radius: 10px">
          <div class="ui large red right corner label" v-if="item.top">
            <i class="arrow alternate circle up icon"></i>
          </div>
          <div class="ui middle aligned mobile reversed stackable">
            <div class="ui grid m-margin-lr">
              <!--标题-->
              <div class="row m-padded-tb-small">
                <h2 class="ui header m-center m-scaleup">
                  <a href="javascript:;" @click.prevent="readBlog(item.id)" class="m-black">{{ item.title }}</a>
                </h2>
              </div>
              <!--文章简要信息-->
              <div class="row m-padded-tb-small">
                <div class="ui horizontal link list m-center">
                  <div class="item m-datetime">
                    <i class="small calendar icon"></i><span>{{ item.createTime.substring(0, 10) }}</span>
                  </div>
                  <div class="item m-views">
                    <i class="small eye icon"></i><span>访问量：{{ item.views }}</span>
                  </div>
                  <div class="item m-common-black">
                    <i class="small pencil alternate icon"></i><span>字数：{{ item.words }}字</span>
                  </div>
                  <div class="item m-common-black">
                    <i class="small clock icon"></i><span>时长：{{ item.readTime }}分</span>
                  </div>
                </div>
              </div>
              <!--分类-->
              <!--              <div class="ui orange large ribbon label">-->
              <!--                <i class="small folder open icon"></i><span class="m-text-500">{{ categoryName }}</span>-->
              <!--              </div>-->
              <!--文章Markdown描述-->
              <div class="typo m-padded-tb-small line-numbers match-braces rainbow-braces"
                   v-html="item.description.substring(0, 30) + '......'"></div>
              <!--阅读全文按钮-->
              <div class="row m-padded-tb-small m-margin-top">
                <a href="javascript:;" @click.prevent="readBlog(item.id)" class="color-btn">阅读全文</a>
              </div>
              <!--横线-->
              <div class="ui section divider m-margin-lr-no"></div>
              <!--标签-->
              <div class="row m-padded-tb-no">
                <div class="column m-padding-left-no">
                  <router-link :to="`/tag/${tag.id}`" class="ui tag label m-text-500 m-margin-small"
                               :class="tag.color" v-for="tag in item.tagList" :key="tag.id">{{ tag.tagName }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </div>

      <div align="center">
        <el-pagination
                background
                :current-page="pageNum"
                :page-size="pageSize"
                layout="total, prev, pager, next"
                :total="total"
                @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { getBlogByCategoryId } from '@/api/blog'
  import Head from '@/components/Head'

  export default {
    name: 'CategoryDetail',
    components: {Head},

    data() {
      return {
        total: 0,
        pageNum: 1,
        pageSize: 10,
        blogList: [],
        categoryId: null,
        categoryName: '',
      }
    },
    watch: {
      $route: {
        // 监听路由变化，由其他界面跳转而来时，刷新博客列表
        handler(val, oldval) {
          this.getBlogList()
        },
        // 深度观察监听
        deep: true
      }
    },
    created() {
      // 当界面被创建时，监听是否有路由参数
      // 若有说明是阅读指定博客，此时需要先查询并显示
      // 若无说明是新增博客
      if (this.$route.params.id) {
        this.categoryId = this.$route.params.id
        this.getBlogByCategoryId(this.$route.params.id)
      }
    },
    methods: {
      handleCurrentChange(val) {
        // 显示第几页
        this.pageNum = val
        this.getBlogList()
        console.log(`当前页: ${val}`)
      },
      // 阅读指定id的文章
      readBlog(id) {
        this.$router.push(`/read/${id}`)
      },
      // 根据分类id查询博客列表
      getBlogByCategoryId(categoryId) {
        getBlogByCategoryId(categoryId).then(res => {
          if (res.code === 200) {
            this.blogList = res.data.blogList
            this.total = res.data.total
            this.categoryName = res.data.categoryName
          } else {
            this.$message.error(res.message)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
    border-radius: 5px;
    background-color: #ff3f1f;
    padding: 10px;
    margin-top: 10px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
