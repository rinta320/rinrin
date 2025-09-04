import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],       
    seats: [],        
    reservation: {    
      movieId: "",
      seat: "",
      name: ""
    },
    aiResponse: "",   
    history: []       
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setSeats(state, seats) {
      state.seats = seats;
    },
    setReservation(state, payload) {
      state.reservation = payload;
    },
    setAIResponse(state, response) {
      state.aiResponse = response;
    },
    setHistory(state, history) {
      state.history = history;
    }
  },
  actions: {
    // 🎬 映画一覧を取得
    async fetchMovies({ commit }) {
      const res = await axios.get("https://m3h-rintaro-0825.azurewebsites.net/api/SELECT_MOVIE");
      commit("setMovies", res.data);
    },

    // 🎟 座席一覧を取得
    async fetchSeats({ commit }, movieId) {
      const res = await axios.get(`https://m3h-rintaro-0825.azurewebsites.net/api/SELECT_SEAT?Movieid=${movieId}`);
      commit("setSeats", res.data);
    },

    // 📝 予約を登録
    async insertReservation({ state }) {
      await axios.post("https://m3h-rintaro-0825.azurewebsites.net/api/INSERT_RESERVATION?", {
        Movieid: state.reservation.movieId,
        Seat: state.reservation.seat,
        Reservename: state.reservation.name
      });
    },

    
    async sendChat({ commit }, message) {
      const res = await axios.post("https://m3h-rintaro-0825.azurewebsites.net/api/Function1?", {
        prompt: message
      });
      commit("setAIResponse", res.data.reply); 
    },

    
    async fetchHistory({ commit }, reservename) {
      const res = await axios.get(
        `https://m3h-rintaro-0825.azurewebsites.net/api/SELECT_HISTORY?Reservename=${reservename}`
      );
      commit("setHistory", res.data);
    }
  },
  getters: {
    movies: state => state.movies,
    seats: state => state.seats,
    reservation: state => state.reservation,
    aiResponse: state => state.aiResponse,
    history: state => state.history
  }
});



