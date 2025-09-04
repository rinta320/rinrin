<template>
  <div class="home">
    <h1 class="title">ようこそ！TOHOシネマズ風映画館へ</h1>
    <router-link to="/movies">
      <button class="btn">映画を見る</button>
    </router-link>
    <router-link to="/aichat">
      <button class="btn ai">AIに席を聞く</button>
    </router-link>
  </div>
</template>

<script>
export default { name: "HomeView" };
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
  background: #111;
  color: white;
  min-height: 100vh;
}
.title {
  margin-bottom: 20px;
  color: #e60012;
}
.btn {
  display: block;
  margin: 10px auto;
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  background: #e60012;
  color: white;
  cursor: pointer;
}
.btn.ai {
  background: #444;
}
</style>


