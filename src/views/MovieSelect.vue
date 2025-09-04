<template>
  <div class="movie-select">
    <h2 class="title">映画選択</h2>
    <div class="movie-grid">
      <div v-for="movie in movies" :key="movie.Movieid" class="movie-card">
        <h3>{{ movie.Movietitle }}</h3>
        <p>{{ movie.Starttime }}</p>
        <router-link :to="`/seats/${movie.Movieid}`">
          <button class="btn">座席予約へ</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MovieSelect",
  computed: {
    ...mapState(["movies"])
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions(["fetchMovies"])
  }
};
</script>

<style scoped>
.movie-select {
  background: #111;
  color: white;
  min-height: 100vh;
  padding: 20px;
}
.title {
  text-align: center;
  color: #e60012;
  margin-bottom: 20px;
}
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
.movie-card {
  background: #222;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}
.btn {
  background: #e60012;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

