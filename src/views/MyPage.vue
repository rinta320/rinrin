<template>
  <div class="mypage">
    <h2 class="title">🎬 予約履歴</h2>

    <div class="search-box">
      <input
        v-model="username"
        placeholder="名前を入力してください"
        class="input"
      />
      <button @click="getHistory" class="btn">履歴を表示</button>
    </div>

    <ul v-if="history.length > 0" class="history-list">
      <li v-for="(h, index) in history" :key="index" class="history-item">
        <p class="movie-id">🎟 映画ID: {{ h.Movieid }}</p>
        <p class="seat">💺 座席: {{ h.Seat }}</p>
        <p>予約者: {{ h.Reservename }}</p>
        <p class="date">日時: {{ h.Reservedate }}</p>
      </li>
    </ul>

    <p v-else class="empty">履歴がありません</p>
  </div>
</template>

<script>
export default {
  name: "MyPage",
  data() {
    return {
      username: ""
    };
  },
  computed: {
    history() {
      return this.$store.getters.history;
    }
  },
  methods: {
    async getHistory() {
      if (this.username.trim()) {
        await this.$store.dispatch("fetchHistory", this.username);
      } else {
        alert("名前を入力してください");
      }
    }
  }
};
</script>

<style scoped>
.mypage {
  background: #111;
  color: #fff;
  min-height: 100vh;
  padding: 30px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.title {
  color: #e60012;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.search-box {
  margin: 20px auto;
  display: flex;
  gap: 10px;
  justify-content: center;
  max-width: 400px;
}

.input {
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
}

.btn {
  background: #e60012;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn:hover {
  background: #b0000d;
}

.history-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.history-item {
  background: #1c1c1c;
  margin: 12px auto;
  padding: 14px;
  border-radius: 8px;
  max-width: 450px;
  text-align: left;
  border: 1px solid #e60012;
}

.movie-id {
  color: #ffd700;
  font-weight: bold;
}

.seat {
  color: #4db8ff;
  margin-bottom: 6px;
}

.date {
  font-size: 13px;
  color: #ccc;
}

.empty {
  color: #aaa;
  margin-top: 20px;
}
</style>









