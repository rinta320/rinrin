<template>
  <div class="chat-container">
    <h2 class="title">🎬 AIにおすすめの席を聞く</h2>

    <div class="chat-box">
      <div
        v-for="(msg, idx) in messages"
        :key="idx"
        :class="['msg', msg.role]"
      >
        <pre class="msg-text">{{ msg.content }}</pre>
      </div>
    </div>

    <div class="input-box">
      <input
        v-model="userMessage"
        @keyup.enter="sendMessage"
        placeholder="AIに聞く..."
      />
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
      messages: [],
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userMessage.trim()) return;

      this.messages.push({ role: "user", content: this.userMessage });

      const apiUrl = "https://m3h-rintaro-0825.azurewebsites.net/api/Function1";

      try {
        const res = await axios.post(
          apiUrl,
          { message: this.userMessage },
          { headers: { "Content-Type": "application/json" } }
        );

        let resData = res.data;
        if (typeof resData === "string") {
          try {
            resData = JSON.parse(resData);
          } catch {
            this.messages.push({
              role: "ai",
              content: "返り値を正しく解析できませんでした。",
            });
            this.userMessage = "";
            return;
          }
        }

        let aiReply = "AIからの返答がありません。";
        if (
          resData &&
          resData.Content &&
          Array.isArray(resData.Content) &&
          resData.Content.length > 0 &&
          resData.Content[0].Text
        ) {
          aiReply = resData.Content[0].Text;
        }

        this.messages.push({ role: "ai", content: aiReply });
      } catch (err) {
        this.messages.push({
          role: "ai",
          content: "サーバーへのリクエストでエラーが発生しました。",
        });
      }

      this.userMessage = "";
    },
  },
};
</script>

<style scoped>
:global(body) {
  background: #0d0d0d;
  margin: 0;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}

.chat-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #ff4757;
  letter-spacing: 1px;
}

.chat-box {
  flex: 1;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 12px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.msg {
  max-width: 75%;
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 15px;
  line-height: 1.6;
  word-break: break-word;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.msg-text {
  margin: 0;
  white-space: pre-line; 
}

.msg.user {
  align-self: flex-end;
  background: linear-gradient(to right, #ff4757, #e60012);
  color: #fff;
  border-bottom-right-radius: 2px;
}

.msg.ai {
  align-self: flex-start;
  background: #f1f1f1;
  color: #000;
  border-bottom-left-radius: 2px;
}

.input-box {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  background: #fff;
  color: #000;
  font-size: 14px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

button {
  padding: 12px 18px;
  background: linear-gradient(to right, #ff4757, #e60012);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 3px 6px rgba(255,71,87,0.4);
}

button:hover {
  background: linear-gradient(to right, #e60012, #b0000d);
  transform: translateY(-2px);
}
</style>





















