<template>
  <div style="height: 500px; width: 700px; overflow-y: auto ;  margin: 0 auto; border: 1px solid black">
    <div v-for="(item, index) in list" :style="{textAlign: item.align}" :key="index" style="margin: 20px;">
      <span v-if="item && item.align === 'right'">{{ item.text }}</span>
      <span v-if="item && item.align === 'left'">{{ item.text }}</span>
    </div>
  </div>
  <div class="center-input-div">
    <el-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
        @keydown.native.enter="send()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',
      list:[
        { text: 'Hello', align: 'left' },
        { text: 'How are you?', align: 'right' },
        { text: "I'm good!", align: 'left'},
      ],
    }
  },
  methods: {
    send() {
      if (this.textarea) {
        this.list.push({ text: this.textarea, align: 'right' })
        this.textarea = ''
      }
    },
  },
}
</script>



<style scoped>
.center-input-div {
  margin: 0 auto;
  width: 700px;
}
</style>