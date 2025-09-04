<template>
  <div id="app" class="app-layout">
    <header class="header">
      🎬 映画館アプリ
      <nav>
        <router-link to="/">座席予約</router-link> |
        <router-link to="/chat">AIチャット</router-link>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      © 2025 映画館アプリ
    </footer>
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
}
.main {
  flex: 1;
  padding: 20px;
  background: #f9f9f9;
  overflow-y: auto;
}
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>





