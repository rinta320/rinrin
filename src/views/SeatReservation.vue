<template>
  <div class="seat-reservation">
    <h2 class="title">座席予約</h2>
    <div class="seat-grid">
      <div v-for="seat in seats" :key="seat.Seat" class="seat"
           :class="{ reserved: seat.Reserve }"
           @click="selectSeat(seat)">
        {{ seat.Rownumber }}{{ seat.Seatnumber }}
      </div>
    </div>
    <div class="actions">
      <input v-model="name" placeholder="お名前" />
      <button @click="goConfirm" class="btn">予約確認へ</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "SeatReservation",
  props: ["movieId"],
  data() {
    return { name: "" };
  },
  computed: {
    ...mapState(["seats"])
  },
  mounted() {
    this.fetchSeats(this.movieId);
  },
  methods: {
    ...mapActions(["fetchSeats"]),
    ...mapMutations(["setReservation"]),
    selectSeat(seat) {
      if (seat.Reserve) return;
      this.setReservation({ movieId: this.movieId, seat: seat.Seat });
    },
    goConfirm() {
      this.setReservation({ name: this.name });
      this.$router.push("/confirm");
    }
  }
};
</script>

<style scoped>
.seat-reservation {
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
.seat-grid {
  display: grid;
  grid-template-columns: repeat(6, 40px);
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
.seat {
  width: 40px;
  height: 40px;
  background: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
}
.seat.reserved {
  background: #333;
  cursor: not-allowed;
}
.actions {
  margin-top: 20px;
}
input {
  padding: 8px;
  margin-right: 10px;
}
.btn {
  background: #e60012;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
}
</style>

