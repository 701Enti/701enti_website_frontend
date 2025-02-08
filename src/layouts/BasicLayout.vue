<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">Content</a-layout-content>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
<style scoped>
.header {
  background: white;
  color: unset;
}
.content {
  background: white;
  color: unset;
  margin-top: 128px;
  align-self: center;
  position: fixed;
}
</style>
