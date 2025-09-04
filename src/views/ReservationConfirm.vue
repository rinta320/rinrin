<template>
  <div class="reservation-confirm">
    <h2 class="title">予約確認</h2>
    <div v-if="movie">
      <p>映画タイトル: {{ movie.Movietitle }}</p>
      <p>上映開始: {{ movie.Starttime }}</p>
      <p>座席番号: {{ reservation.seat }}</p>
      <p>お名前: {{ reservation.name }}</p>
      <button @click="confirm" class="btn">予約確定</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ReservationConfirm",
  computed: {
    ...mapState(["reservation"]),
    ...mapGetters(["selectedMovie"]),
    movie() { return this.selectedMovie; }
  },
  methods: {
    ...mapActions(["insertReservation"]),
    async confirm() {
      await this.insertReservation();
      alert("予約が完了しました！");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.reservation-confirm {
  background: #111;
  color: white;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
}
.title {
  color: #e60012;
  margin-bottom: 20px;
}
.btn {
  margin-top: 20px;
  background: #e60012;
  border: none;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
}
</style>
