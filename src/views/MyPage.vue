<template>
  <div>
    <h2>予約履歴</h2>

    <!-- 名前入力フォーム -->
    <input v-model="username" placeholder="名前を入力してください" />
    <button @click="getHistory">履歴を表示</button>

    <!-- 履歴一覧 -->
    <ul v-if="history.length > 0">
      <li v-for="(h, index) in history" :key="index">
        映画ID: {{ h.Movieid }} / 座席: {{ h.Seat }} / 名前: {{ h.Reservename }} / 日時: {{ h.Reservedate }}
      </li>
    </ul>

    <!-- 履歴がない場合 -->
    <p v-else>履歴がありません</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "" // 入力された名前
    };
  },
  computed: {
    history() {
      return this.$store.getters.history;
    }
  },
  methods: {
    async getHistory() {
      if (this.username.trim() !== "") {
        await this.$store.dispatch("fetchHistory", this.username);
      } else {
        alert("名前を入力してください");
      }
    }
  }
};
</script>
