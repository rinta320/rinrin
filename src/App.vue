<template>
  <div id="app" class="app-layout">
    <header class="header">
      <span class="logo">KOBAYASHI CINEMA</span>
      <nav class="nav">
        <!-- ホームボタン -->
        <router-link to="/" class="nav-btn">ホーム</router-link>
        <!-- 予約履歴ボタン -->
        <router-link to="/mypage" class="nav-btn">予約履歴</router-link>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background: #4facfe;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between; /* 左右にロゴとナビを配置 */
  align-items: center;
}

.logo {
  font-size: 18px;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 15px; /* ボタン間に余白 */
}

.nav-btn {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-btn:hover {
  text-decoration: underline;
}
</style>






