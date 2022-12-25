<template>
  <div ref="head" class="ui fixed inverted stackable pointing menu">
    <div class="ui container">
      <router-link to="/blog">
        <h3 class="ui header item m-blue"> WHTLI </h3>
      </router-link>
      <router-link to="/blog" class="item">
        <i class="home icon"></i>首页
      </router-link>
      <router-link to="/category" class="el-dropdown-link item">
        <i class="idea icon"></i>分类
      </router-link>
      <router-link to="/tag" class="el-dropdown-link item">
        <i class="tag icon"></i>标签
      </router-link>
      <!--<el-dropdown trigger="click" @command="categoryRoute">
        <span class="el-dropdown-link item">
          <i class="idea icon"></i>分类<i class="caret down icon"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="category.name" v-for="(category,index) in categoryList" :key="index">{{ category.name }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>-->
      <router-link to="/archive" class="item">
        <i class="clone icon"></i>归档
      </router-link>
      <!--      <router-link to="/friends" class="item" :class="{'m-mobile-hide': mobileHide,'active':$route.name==='friends'}">
              <i class="users icon"></i>友链
            </router-link>-->
      <router-link to="/about" class="item">
        <i class="info icon"></i>关于
      </router-link>
      <!--      <el-autocomplete v-model="queryString" :fetch-suggestions="debounceQuery" placeholder="Search..."
                             class="right item m-search" :class="{'m-mobile-hide': mobileHide}"
                             popper-class="m-search-item" @select="handleSelect">
              <i class="search icon el-input__icon" slot="suffix"></i>
              <template slot-scope="{ item }">
                <div class="title">{{ item.title }}</div>
                <span class="content">{{ item.content }}</span>
              </template>
            </el-autocomplete>-->
      <!--      <button class="ui menu black icon button m-right-top m-mobile-show" @click="toggle">
              <i class="sidebar icon"></i>
            </button>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Head",
    props: {},
    data() {
      return {
        mobileHide: true,
        queryString: ''
      }
    }
  }

</script>

<style scoped>

</style>
