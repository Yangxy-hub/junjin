<template>
  <div class="warp">

    <!-- 左侧导航栏 -->
    <div class="navWrap">
      <div class="nav">
        <ul class="nav-list">
          <li
            class="nav-item"
            @click="changeData(1)"
          ><a
              href="javascript:;"
              :class="{active: isActive === 1}"
              @click="changeClass(1)"
              title="推荐"
            >推荐</a></li>
          <li
            class="nav-item"
            @click="changeData(2)"
          ><a
              href="javascript:;"
              title="热门"
              :class="{active: isActive === 2}"
              @click="changeClass(2)"
            >热门</a></li>
          <li
            class="nav-item concerns"
            @click="changeData(3)"
          ><a
              href="javascript:;"
              title="关注"
              :class="{active: isActive === 3}"
              @click="changeClass(3)"
            >关注</a></li>
          <blockquote
            v-for="(item, index) in recommentTopPicData"
            :key="item.topic_id"
          >
            <li
              class="nav-item"
              @click="getRecommentListData(item.topic_id)"
            ><a
                href="javascript:;"
                title="上班摸鱼"
                :class="{active: isListActive === index}"
                @click="changeListClass(index)"
              >{{item.title}}</a></li>
          </blockquote>
        </ul>
      </div>
    </div>
    <!-- 中间内容展示区  -->
    <ul class="contentList" v-if="!isShow">
      <li
        class="contentList-item"
        v-for="item in data"
        :key="item.msg_id"
      >
        <div class="header">
          <div class="imgBox">
            <img
              :src="item.imgUrl"
              alt=""
            >
          </div>

          <div class="title">
            <div class="nickName">{{item.author_user_info.user_name}}</div>
            <div class="dec">{{item.author_user_info.job_title?item.author_user_info.job_title:"前端"}}·13分钟前</div>
          </div>
          <button class="concerns">关注</button>
        </div>
          <div class="content">
            {{item.msg_Info.content}}
            <div class="imgBox">
              <img :src="item.msg_Info.pic_list[0]" alt="">
            </div>

          </div>
        <div class="tab"><span>{{item.topic.title?item.topic.title:"推荐"}}</span></div>
        <div class="footer">
          <div class="footer-button">
            <i class="iconfont icon-good"></i>
            <span class="border-right">赞{{item.msg_Info.digg_count?item.msg_Info.digg_count:""}}</span>
          </div>
          <div class="footer-button">
            <i class="iconfont icon-RectangleCopy"></i>
            <span class="border-right">{{item.msg_Info.comment_count}}</span>
          </div>
          <div class="footer-button">
            <i class="iconfont icon-upload"></i>
            <span>分享</span>
          </div>
        </div>
      </li>
    </ul>

    <div
      class="concernskong"
      v-if="isShow"
    >
        <i class="iconfont icon-icon_compile"></i>
      <h3 class="title">你关注人的动态会显示在这里</h3>
      <div class="button" @click="goLogin">登录</div>
    </div>

    <!-- 右侧内容推荐区 -->
    <div class="cardWrap">
      <div class="recommentCart">
        <header class="title">推荐沸点</header>
        <ul class="hotList">
          <li class="hotList-item">
            <div class="content">
              <div class="content-dec">
                {{data[0].msg_Info.content}}
              </div>
              <div class="start">
                <span>赞{{data[0].msg_Info.digg_count}}</span>
                <i class="dian">·</i>
                <span>{{data[0].msg_Info.comment_count}}评论</span>
              </div>
            </div>
            <!-- <div class="imgBox">
                        <img src="./img/cat.png" alt="">
                    </div> -->
          </li>

          <li class="hotList-item">
            <div class="content">
              <div class="content-dec">
                {{data[1].msg_Info.content}}
              </div>
              <div class="start">
                <span>赞{{data[1].msg_Info.digg_count}}</span>
                <i class="dian">·</i>
                <span>{{data[1].msg_Info.comment_count}}评论</span>
              </div>
            </div>
            <!-- <div class="imgBox">
                        <img src="./img/cat.png" alt="">
                    </div> -->
          </li>

          <li class="hotList-item">
            <div class="content">
              <div class="content-dec">
                {{data[2].msg_Info.content}}
              </div>
              <div class="start">
                <span>赞{{data[2].msg_Info.digg_count}}</span>
                <i class="dian">·</i>
                <span>{{data[2].msg_Info.comment_count}}评论</span>
              </div>
            </div>
            <!-- <div class="imgBox">
                        <img src="./img/cat.png" alt="">
                  </div> -->
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import "../../assets/iconfont/iconfont.css"
export default {
  name: 'BoilingPoint',
  data() {
    return {
      // 专门用来存放展示源的数据
      data: [],
      // 导航栏数据
      recommentTopPicData: [],
      // 推荐页数据
      recommentedData: [],
      // 沸点热榜数据
      hotData: [],
      // 导航栏上半部分下标
      isListActive: null,
      isActive: 1,
      // 导航栏topic数据
      topicData: [],
      isShow: false
    }
  },
  async mounted() {
    // 获取沸点导航栏数据
    const reqRecommentTopPicData = await this.$API.reqRecommentTopPic();
    this.recommentTopPicData = reqRecommentTopPicData.data
    // console.log(res)

    // 获取沸点推荐页数据
    const recommentedData = await this.$API.reqRecommented();

    // 截取带参数的用户头像
    const imgUrl = recommentedData.data.map(item => {
      const res = item.author_user_info.avatar_large.split("?")
      return res[0]
    })
    this.recommentedData = recommentedData.data
    // 放到数据里的每一项里面

    recommentedData.data.forEach((item, index) => {
      item.imgUrl = imgUrl[index]
    })

    this.data = this.recommentedData
  },
  methods: {
    // 点击更改数据源  让右侧显示对应数据
    async changeData(i) {
      if (i === 1) {
        this.data = this.recommentedData
        this.isShow = false
      } else if (i === 2) {
        // 获取hot 热榜数据           
        const hotData = await this.$API.reqHot()
        // 截取带参数的用户头像
        const imgUrl = hotData.data.map(item => {
          const res = item.author_user_info.avatar_large.split("?")
          return res[0]
        })
        this.hotData = hotData.data
        // 放到数据里的每一项里面
        hotData.data.forEach((item, index) => {
          item.imgUrl = imgUrl[index]
        })
        this.data = this.hotData
        this.isShow = false
      }else if(i === 3){
          this.isShow = true
      }
    },
    // 点击更改active样式
    changeClass(i) {
      this.isActive = i,
        this.isListActive = ''
    },
    changeListClass(i) {
      this.isListActive = i
      this.isActive = ''
    },
    // 根据id获取导航栏对应数据
    async getRecommentListData(topic_id) {
      let topicData = await this.$API.reqTopicList({ topic_id: topic_id })

      console.log(topic_id)
      
      console.log(topicData)
      // 截取带参数的用户头像
      const imgUrl = topicData.data.map(item =>{
      const res =  item.author_user_info.avatar_large.split("?")
          return res[0]
      })
      this.topicData = topicData.data
       // 放到数据里的每一项里面
      topicData.data.forEach((item,index) => {
          item.imgUrl = imgUrl[index]           
      }) 
      this.data = this.topicData
      this.isShow = false
    },
    // 点击跳转到登录页面
    goLogin(){
        this.$router.push("/login")
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.warp {
  a {
    color: #909090;
    text-decoration: none;
  }
  width: 960px;
  margin: 50px auto;
  overflow: hidden;
  height: 100%;
  // 左侧导航栏
  .navWrap {
    width: 112px;
    .nav {
      background-color: #fff;
      width: 112px;
      position: fixed;
      top: 50px;
      left: 50%;
      transform: translateX(-470px);
      .nav-list {
        padding: 16px 12px;
        width: 88px;
        position: relative;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        .nav-item {
          width: 88px;
          height: 30px;
          line-height: 31px;
          text-align: center;
          margin: 10px 0;
          position: relative;
          &.concerns::after {
            content: "";
            position: absolute;
            bottom: -7px;
            left: 5px;
            width: 88px;
            height: 1px;
            box-sizing: border-box;
            background-color: #ebebeb;
          }
          a {
            box-sizing: border-box;
            display: block;
            border-radius: 8px;
            width: 100%;
            height: 100%;
            font-size: 14px;
            white-space: nowrap;
            padding: 0 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            &.active {
              background-color: rgb(0, 127, 255) !important;
              color: #fff !important;
            }
            &:hover {
              background-color: rgb(244, 245, 245);
              color: rgb(0, 127, 255);
            }
          }
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            border-bottom: 1px solid rgb(244, 245, 245);
          }
        }
      }
    }
  }
  // 中间内容展示区
  .contentList {
    float: left;
    margin-left: 124px;
    .contentList-item {
      background-color: #fff;
      width: 570px;
      margin-bottom: 8px;
      margin-right: 15px;
      .header {
        box-sizing: border-box;
        width: 100%;
        padding: 16px 24px 0 20px;
        display: flex;
        position: relative;
        .imgBox {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title {
          margin-left: 12px;
          line-height: 16px;
          .nickName {
            font-weight: 700;
            color: #333;
            font-size: 14px;
            margin-bottom: 5px;
            margin-top: 5px;
          }
          .dec {
            color: #909090;
          }
        }
        .concerns {
          position: absolute;
          right: 24px;
          top: 25px;
          background-color: #fff;
          border: 1px solid #6cbd45;
          color: #6cbd45;
        }
      } 
      .content {
          margin: 5px auto;
          width: 445px;
          font-size: 15px;
          line-height: 22px;
          padding-left: 26px;
          color: #333;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          .imgBox{
            width: 445px;
            img{
              width:100%;
            }
          }
    }
      .tab {
        margin: 0 auto;
        margin-top: 10px;
        padding-left: 26px;
        width: 445px;
        color: rgb(0, 127, 255);
        span {
          display: inline-block;
          box-sizing: border-box;
          // width: 76px;
          border: 1px solid rgb(0, 127, 255);
          border-radius: 10px;
          padding: 3px 12px;
        }
      }
      .footer {
        display: flex;
        margin-top: 10px;
        border-top: 1px solid #ebebeb;
        .footer-button {
          width: 190px;
          height: 34px;
          line-height: 34px;
          color: #909090;
          text-align: center;
          line-height: 34px;
          position: relative;
          cursor: pointer;
          .iconfont {
            position: absolute;
            top: 0px;
            left: 66px;

            font-size: 14px;
          }
          span {
            display: inline-block;
            width: 100%;
            height: 100%;
            position: relative;
            &.border-right::after {
              content: "";
              position: absolute;
              top: 5px;
              right: -1px;
              width: 1px;
              height: 24px;
              background-color: #ebebeb;
            }
          }
        }
      }
    }
  }
  // 关注区
 .concernskong{
     width: 530px;
     background-color: #fff;
    float: left;
    margin-left: 124px;
    text-align: center;
    height: 200px;
    padding: 20px;
    font-size: 15px;
    position: relative;
    .icon-icon_compile{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 40px;
        font-size: 60px;
        color:rgb(244, 245, 245);
    }
    .title{
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        color: #b2bac2;
    }
    .button{
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        width: 80px;
        height: 34px;
        color: #027fff;
        margin-top: 14px;
        padding: 6px 15px;
        border: 1px solid #027fff;
        border-radius: 2px;
        cursor: pointer;
    }
 }
  // 右侧内容推荐区
  .recommentCart {
    width: 248px;
    background-color: #fff;
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(234px);
    float: left;
    .title {
      box-sizing: border-box;
      width: 100%;
      height: 43px;
      padding: 13px 16px;
      color: #213135;
      font-size: 15px;
      font-weight: 700;
      border-bottom: 1px solid #ebebeb;
    }
    .hotList {
      padding: 0 16px;
      .hotList-item {
         cursor: pointer;
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        border-bottom: 1px solid #ebebeb;
        .content {
          .content-dec {
            color: #2e3135;
            font-size: 14px;
            margin-top: 5px;
            margin-bottom: 15px;
            // height: 36px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .start {
            display: flex;
            font-size: 12px;
            color: #8a93a0;
            .dian {
              margin: 0 3px;
              color: #8a93a0;
            }
          }
        }
        .imgBox {
          display: block;
          width: 68px;
          height: 68px;
          overflow: hidden;
          z-index: 1;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>