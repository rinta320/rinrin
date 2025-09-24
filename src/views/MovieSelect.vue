<template>
  <div class="movie-select">
    <h2 class="title">🎬 上映作品一覧</h2>

    <div
      v-for="movie in movies"
      :key="movie.Movieid"
      class="movie-card"
    >
      <div class="movie-info">
        <p class="movie-title">
          {{ movie.Movietitle }}
          <span class="movie-id">ID: {{ movie.Movieid }}</span>
        </p>
        <p class="movie-time">🎞 上映開始: {{ movie.Starttime }}</p>
      </div>

      <router-link
        class="seat-link"
        :to="'/seats/' + movie.Movieid"
      >
        🎟 座席を選択
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MovieSelect",
  computed: {
    ...mapGetters(["movies"])
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
  color: #fff;
  min-height: 100vh;
  padding: 30px 15px;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.movie-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #444;
  border-radius: 10px;
  padding: 20px;
  margin: 15px auto;
  background: #1a1a1a;
  max-width: 650px;
  transition: background 0.2s;
}

.movie-card:hover {
  background: #222;
}

.movie-info {
  flex: 1;
}

.movie-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.movie-id {
  font-size: 13px;
  background: #e60012;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
}

.movie-time {
  font-size: 14px;
  color: #aaa;
}

.seat-link {
  padding: 10px 16px;
  background: #e60012;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.2s;
}

.seat-link:hover {
  background: #b0000d;
}
</style>











