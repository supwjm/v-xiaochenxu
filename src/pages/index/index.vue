<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <Switch/>
    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <!-- <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form> -->
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <view id="example-1">
      <view v-for="item in shopList.shop_list">
        {{ item.shop_nick_name }}
      </view>
    </view>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { SHOP_LIST,CLEAR_SHOP_LIST } from '@/store/mutations-type'
import card from '@/components/card'
//import shop from '@/api/shop'
import Switch from 'zanui/Switch'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  computed: {
    ...mapState('shop', ['shopList'])
  },
  components: {
    card,
    Switch
  },

  methods: {
    ...mapMutations('shop', {
      clearShopList: CLEAR_SHOP_LIST
    }),
    ...mapActions('shop', [
      'getList'
    ]),
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    let data = {
      push_type:"4",
      is_detail:"1",
      page_size:"20",
      prog_opt:"8",
      query_type:"1",
      page_no:"1",
      longi:"-118251931",
      lati:"34043478",
    }

    this.getList({data:data})

    setTimeout(()=>{
      this.clearShopList({name:"ming"})
    },5000)

  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
