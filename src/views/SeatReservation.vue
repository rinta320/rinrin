<template>
  <div class="cinema">
    <h2 class="title">🎬 座席予約</h2>
    <div class="screen">スクリーン</div>

    <div class="seating">
      <div  
        v-for="seat in seats"  
        :key="seat.Seat"
        class="seat"
        :class="{ reserved: seat.Reserve, selected: seat.Seat === selectedSeat }"
        @click="selectSeat(seat)"
      >
        {{ seat.Rownumber }}{{ seat.Seatnumber }}
      </div>
    </div>

    <div class="form-area">
      <input v-model="name" placeholder="お名前" class="input" />
      <button @click="goConfirm" class="btn">予約確認へ</button>
    </div>

    <router-link to="/aichat">
      <button class="ai-btn">🤖 AIに相談</button>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: ["movieId"],
  data() {
    return {
      name: "",
      selectedSeat: null
    };
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
      this.selectedSeat = seat.Seat;
    },
    goConfirm() {
      if (!this.selectedSeat) {
        alert("座席を選択してください");
        return;
      }
      if (!this.name.trim()) {
        alert("名前を入力してください");
        return;
      }
      this.setReservation({
        movieId: this.movieId,
        seat: this.selectedSeat,
        name: this.name
      });
      this.$router.push("/confirm");
    }
  }
};
</script>

<style scoped>
.cinema {
  text-align: center;
  background: #0d0d0d;
  color: #fff;
  min-height: 100vh;
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
}

.title {
  color: #ff4757;
  margin-bottom: 20px;
  font-size: 26px;
  letter-spacing: 2px;
}

.screen {
  background: linear-gradient(to bottom, #666, #222);
  color: #fff;
  padding: 14px;
  margin: 20px auto;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.2);
  width: 70%;
}

.seating {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px; /* ← 間隔は今まで通り */
  justify-items: center;
  margin-bottom: 25px;
}

.seat {
  width: 42px;
  height: 42px;
  background: linear-gradient(to bottom, #555, #333);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.25s;
  box-shadow: 0 3px 6px rgba(0,0,0,0.5);
}

.seat:hover {
  background: linear-gradient(to bottom, #777, #444);
  transform: scale(1.05);
}

.reserved {
  background: #1c1c1c;
  color: #777;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.8);
  pointer-events: none;
}

.selected {
  background: linear-gradient(to bottom, #ff4757, #c0392b);
  color: white;
  box-shadow: 0 0 12px rgba(255,71,87,0.8);
}

.form-area {
  margin-bottom: 15px;
}

.input {
  padding: 10px;
  border-radius: 6px;
  border: none;
  width: 200px;
  margin-right: 10px;
  background: #222;
  color: #fff;
}

.btn {
  background: linear-gradient(to right, #ff4757, #e60012);
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 3px 8px rgba(255,71,87,0.5);
  transition: 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

.ai-btn {
  margin-top: 20px;
  background: linear-gradient(to right, #444, #222);
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(255,255,255,0.2);
  transition: 0.2s;
}

.ai-btn:hover {
  background: linear-gradient(to right, #666, #333);
  transform: translateY(-2px);
}
</style>



























