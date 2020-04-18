<template>
  <div class="item-container">
    <van-row type="flex" justify="space-between" class="infos">
      <van-col span="9">
        <img class="user-icon" :src="item.profile_src" alt />
        <span>{{item.uname}}</span>
      </van-col>
      <van-col span="12" align="right">
        <van-button type="warning" plain size="small">关注</van-button>
        <van-icon name="ellipsis" />
      </van-col>
    </van-row>

    <van-swipe @change="onChange" class="my-swipe" :loop="false">
      <van-swipe-item
        v-for="(img,imgIndex) in item.imgArr"
        :key="imgIndex"
        @click="swipClickHandler(imgIndex)"
      >
        <img :src="img" alt />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{item.imgArr.length}}</div>
      </template>
    </van-swipe>

    <van-row type="flex" class="icons">
      <van-col span="6">
        <i class="iconfont icon-praise"></i>
        <span>{{item.likenum}}</span>
      </van-col>
      <van-col span="6">
        <i class="iconfont icon-message"></i>
        <span>{{item.commentnum}}</span>
      </van-col>
      <van-col span="6" offset="6">
        <i class="iconfont icon-love"></i>
        <span>{{item.collectnum}}</span>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">{{item.intro}}</van-col>
    </van-row>

    <van-row class="tag">
      <van-col span="24" class="van-hairline--bottom">
        <van-tag size="medium" v-for="(tag,tagIndex) in item.tags" :key="tagIndex">{{tag}}</van-tag>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <ul class="commentinfos">
          <li v-for="cinfo in item.commentinfos" :key="cinfo.id">
            <span>{{cinfo.uname}}:</span>
            {{cinfo.message}}
          </li>
        </ul>
      </van-col>
    </van-row>

    <van-row class="date">
      <van-col span="6">{{item.date}} 小时前</van-col>
    </van-row>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  props: ["item"],
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    swipClickHandler(index) {
      // 图片点击是，预览图片
      ImagePreview({
        images:this.item.imgArr,
        startPosition: index,
      });
    }
  },
  components: {
    ImagePreview
  }
};
</script>

<style lang="scss" scoped>
.item-container {
  .van-row {
    padding: 0 20px;
  }
  .infos {
    padding: 10px 20px;
    & > :nth-child(1) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        font-size: 14px;
        border-radius: 6px;
        margin-right: 10px;
      }

      .van-icon-ellipsis {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .user-icon {
      width: 25px;
      border-radius: 50%;
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
  .van-swipe-item {
    height: 200px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .icons {
    color: #555;
    text-align: center;
    margin: 15px 0;
    display: flex;
    align-items: center;

    i {
      font-size: 20px;
      color: #222;
      margin-right: 4px;
    }
    span {
      color: #666;
      font-size: 16px;
    }
  }

  .tag {
    margin: 8px 0;
    .van-tag {
      margin: 4px;
    }
  }

  .date {
    font-size: 12px;
    color: #333;
    margin: 8px 0;
  }

  .commentinfos {
    font-size: 13px;
    color: #555;
    li {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        color: #222;
        margin-right: 3px;
      }
    }
  }
}
</style>
