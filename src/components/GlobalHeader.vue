<template>
  <div id="globalHeader">
    <a-row class="top-row">
      <a-col flex="420px">
        <a-menu
          class="col-menu"
          v-model:selectedKeys="navigationCurrent"
          mode="horizontal"
          :items="navigationItems"
          @click="onMenuClick"
        />
      </a-col>
      <a-col flex="auto" class="col-input-search">
        <a-input-search
          v-model:value="searchValue"
          placeholder="搜索我们共同的需要"
          enter-button
        />
      </a-col>
      <a-col flex="32px" class="col-user-sign">
        <a-space direction="vertical" :size="32">
          <a-space wrap :size="16">
            <a-avatar>
              <template #icon><UserOutlined /></template>
            </a-avatar>
          </a-space>
        </a-space>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { h, ref } from "vue";
import {
  HomeOutlined,
  AimOutlined,
  ReadOutlined,
  CommentOutlined,
  ExperimentOutlined,
} from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";
//点击菜单执行对应路由事件,push到菜单中预设的key实现与路由库的对接
const router = useRouter();
const onMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};
//菜单预设
const navigationCurrent = ref<string[]>(["home"]);
router.afterEach((to) => {
  navigationCurrent.value = [to.path];
}); //根据路由状态同步current的值
const navigationItems = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "首页",
    title: "网站主起始页面",
  },
  {
    key: "/aim",
    icon: () => h(AimOutlined),
    label: "项目",
    title: "我们的公共软硬件工程",
  },
  {
    key: "/read",
    icon: () => h(ReadOutlined),
    label: "文档",
    title: "了解或学习一些",
  },
  {
    key: "/comment",
    icon: () => h(CommentOutlined),
    label: "交流",
    title: "让我们讨论一会儿",
  },
  {
    key: "/experiment",
    icon: () => h(ExperimentOutlined),
    label: "实验",
    title: "发现更多可能",
  },
]);
//全局搜索栏
const searchValue = ref<string>("");
</script>
<style scoped>
.top-row {
  display: flex;
  align-items: center;
}
.col-menu {
  display: flex;
  padding-right: 64px;
}
.col-input-search {
  display: flex;
  align-items: flex-end;
  padding-right: 64px;
}
.col-user-sign {
  display: flex;
  align-items: center;
}
</style>
