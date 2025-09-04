<template>
  <div class="chat-container">
    <h2 class="title">AIにおすすめの席を聞く</h2>
    <div class="chat-box">
      <div v-for="(msg, idx) in messages" :key="idx" :class="['msg', msg.role]">
        <p>{{ msg.content }}</p>
      </div>
    </div>
    <div class="input-box">
      <input v-model="userMessage" @keyup.enter="sendMessage" placeholder="AIに聞く..." />
      <button @click="sendMessage">送信</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AIChat",
  data() {
    return {
      userMessage: "",
      messages: []
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userMessage) return;
      this.messages.push({ role: "user", content: this.userMessage });
      try {
        const res = await axios.post("https://<YOUR_AZURE_FUNCTION>/api/Function1", {
          message: this.userMessage
        });
        const aiReply = JSON.parse(res.data).choices[0].message.content;
        this.messages.push({ role: "ai", content: aiReply });
      } catch (err) {
        this.messages.push({ role: "ai", content: "エラーが発生しました" });
      }
      this.userMessage = "";
    }
  }
};
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: auto;
  background: #111;
  color: #fff;
  padding: 16px;
  border-radius: 12px;
}
.title {
  text-align: center;
  color: #e60012; /* TOHOシネマズ赤 */
}
.chat-box {
  background: #222;
  height: 400px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}
.msg.user { text-align: right; color: #66ccff; }
.msg.ai { text-align: left; color: #fff; }
.input-box {
  display: flex;
  gap: 8px;
}
input {
  flex: 1;
  padding: 8px;
}
button {
  background: #e60012;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
}
</style>

