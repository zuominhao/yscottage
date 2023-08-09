<script setup>
import { ref } from 'vue'

const textarea = ref('')

const list = [
  { text: 'Hello', align: 'left', link: '' },
  { text: 'How are you?', align: 'right', link: '' },
  { text: 'I\'m good!', align: 'left', link: '' },
]
</script>

<template>
  <div style="height: 500px; overflow-y: auto">
    <div v-for="(item, index) in list" :style="{textAlign: item.align}" :key="index">
      <span v-if="item && item.align === 'left'">
        <span v-if="!item.link">{{ item.text }}</span>
        <span v-else>: <a :href="item.link" target="_blank">{{ item.text }}</a></span>
      </span>
      <span v-if="item && item.align === 'right'">
        {{ item.text }}
      </span>
    </div>
  </div>

  <textarea v-model="textarea"></textarea>
  <button @click="addMessage">Send</button>
</template>

<script>
export default {
  setup() {
    // 在这里可以使用响应式数据和方法
    // ...
  }
}
</script>

<style scoped>
/* 增加一些样式来美化聊天框 */
div {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
}

textarea {
  width: 100%;
  height: 50px;
  resize: none;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
