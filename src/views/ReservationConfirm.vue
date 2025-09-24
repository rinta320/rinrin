<template>
  <div class="reservation-confirm">
    <h2 class="title">🎟 予約確認 🎬</h2>

    <div v-if="reservation.movieId && reservation.seat && reservation.name" class="ticket-card">
      <div class="ticket-content">
        <p><strong>映画ID:</strong> {{ reservation.movieId }}</p>
        <p><strong>座席番号:</strong> {{ reservation.seat }}</p>
        <p><strong>お名前:</strong> {{ reservation.name }}</p>
      </div>
      <div class="ticket-footer">
        <button @click="confirmReservation" class="btn">✅ 予約確定</button>
      </div>
    </div>

    <p v-else class="empty">⚠️ 予約情報が不足しています</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ReservationConfirm",
  computed: {
    ...mapState(["reservation"])
  },
  methods: {
    ...mapActions(["insertReservation"]),
    async confirmReservation() {
      if (
        !this.reservation ||
        !this.reservation.movieId ||
        !this.reservation.seat ||
        !this.reservation.name
      ) {
        alert("予約情報が不足しています");
        return;
      }

      try {
        await this.insertReservation();
        this.$router.push("/mypage");
      } catch (err) {
        console.error("予約処理でエラー:", err);
        alert("予約に失敗しました");
      }
    }
  }
};
</script>

<style scoped>
.reservation-confirm {
  background: #0d0d0d; 
  color: white;
  min-height: 100vh;
  padding: 30px 20px;
  text-align: center;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.title {
  color: #ff4757;
  font-size: 28px;
  margin-bottom: 30px;
  text-shadow: 0 0 10px #ff4757, 0 0 20px #e60012;
  letter-spacing: 1px;
}

.ticket-card {
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border: 2px dashed #ff4757;
  border-radius: 16px;
  padding: 25px;
  max-width: 450px;
  margin: 0 auto;
  box-shadow: 0 8px 20px rgba(255, 71, 87, 0.3);
}

.ticket-content {
  font-size: 16px;
  line-height: 1.8;
  color: #f1f1f1;
  margin-bottom: 20px;
  text-align: left;
}

.ticket-content strong {
  color: #ff4757;
}

.ticket-footer {
  text-align: center;
}

/* 予約確定ボタン */
.btn {
  background: linear-gradient(90deg, #ff4757, #e60012);
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(255, 71, 87, 0.5);
  transition: all 0.2s;
}

.btn:hover {
  background: linear-gradient(90deg, #e60012, #b0000d);
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(255, 71, 87, 0.6);
}

.empty {
  margin-top: 30px;
  font-size: 18px;
  color: #bbb;
}
</style>







