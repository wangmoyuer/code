<template>
  <div>
    <header-nav v-bind:class="{'isZixun':isNowPage}"></header-nav>
    <div class="article_list">
      <ul>
          <!-- v-for循环数据 -->
        <li v-for="i in list" :key="i.id">
            <!-- v-text="i.create_at"渲染时间数据 -->
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <!-- router-link：vuerouter2声明式导航 -->
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
import HeaderNav from '../components/header.vue'
import FooterNav from '../components/footer.vue'
export default {
  components: { HeaderNav, FooterNav },
  data () {
    return {
      isNowPage: true,
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>