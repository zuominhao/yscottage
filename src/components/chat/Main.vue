<template>
    <div ref="messageContainer"
         style="height: 500px; width: 900px; overflow-y: auto; margin: 0 auto; border: 1px solid black">
        <div
            v-for="(item, index) in list"
            :style="{ textAlign: item.align }"
            :key="index"
            style="margin: 20px;"
        >
            <span v-if="item && item.align === 'right'">{{ item.text }}</span>
            <span v-if="item && item.align === 'left'">{{ item.text }}</span>
        </div>
    </div>
    <div class="center-input-div">
        <el-input
            v-model="textarea"
            :rows="1"
            type="textarea"
            placeholder="Please input"
            @keydown.native.enter="sendMessage()"
        ></el-input>
    </div>
</template>

<script>
import {EventSourcePolyfill} from "event-source-polyfill";
export default {
    data() {
        return {
            textarea: "",
            list: [],
            echoChannel: null,
        };
    },
    methods: {
        SubscribeEcho() {
            let eventSource = new EventSourcePolyfill('http://localhost:8087/notify/subscribe/message', {
                headers: {
                    "userId": localStorage.getItem("currentUserId")
                },
                heartbeatTimeout: 5000*5000*5000*5000*5000,
                withCredentials: true,
            });

            eventSource.addEventListener("message", event => {
                let eventData = JSON.parse(event.data);
                let message = eventData.message;
                this.list.push({text: message, align: "left"});

                this.$nextTick(() => {
                    this.scrollToBottom();
                });
                console.log("text <<< ", event.data);
            });

            eventSource.addEventListener("error", error => {
                console.error("SSE Error:", error);
                eventSource.close();
            });

        },

        sendMessage() {
            let message = this.textarea;
            let userId =localStorage.getItem("currentUserId");
            let targetId=43;
            let data={  message,  userId,  targetId };

            if (this.textarea) {
                this.list.push({text: this.textarea, align: "right"});
                this.textarea = "";
                console.log("text >>> ", data);
                this.axios
                    .post('message/send', data)
                    .then(() => {
                        console.log("事件发送成功！");
                    })
                    .catch((error) => {
                        console.error("事件发送失败！错误为:", error);
                    });
            }
            this.$nextTick(() => {
                this.scrollToBottom();
            });
        },

        scrollToBottom() {
            let container = this.$refs.messageContainer;
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
        }
    },
    mounted() {
        // this.SubscribeEcho();
    },
    destroyed() {
        this.eventSource.close();
    }
};
</script>

<style scoped>
.center-input-div {
    margin: 0 auto;
    width: 900px;
}

</style>
