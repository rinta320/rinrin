<template>
  <div class="home">
    <div class="overlay">
      <div class="home-container">
        <div class="logo-title">
          <span class="logo-mark">🎥</span>
          <h1 class="title">KOBAYASHI CINEMA</h1>
        </div>

        <p class="subtitle">最高の映画体験を、ここから。</p>

        <router-link to="/movies" class="start-btn">
          🎟 チケットを予約する
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
};
</script>

<style scoped>
.home {
  background: url("https://images.unsplash.com/photo-1524985069026-dd778a71c7b4") no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Helvetica Neue", Arial, sans-serif;
  text-align: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-container {
  max-width: 500px;
  padding: 40px 24px;
}

.logo-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.logo-mark {
  font-size: 36px;
}

.title {
  font-size: 32px;
  font-weight: bold;
}

.subtitle {
  font-size: 16px;
  color: #ddd;
  margin-bottom: 30px;
}

.start-btn {
  display: inline-block;
  padding: 12px 24px;
  background: #e60012;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.2s;
}

.start-btn:hover {
  background: #b0000d;
}
</style>
















