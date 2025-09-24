import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const API_BASE = "https://m3h-rintaro-0825.azurewebsites.net/api";

export default new Vuex.Store({
  state: {
    movies: [],       
    seats: [],           
    reservation: {      
      movieId: null,     
      seat: null, 
      row: null,       
      name: "" ,
      date: ""          
    },
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
      if ("movieId" in payload) state.reservation.movieId = payload.movieId;
      if ("seat" in payload) {
        state.reservation.seat = payload.seat;
        state.reservation.row = payload.row;
      }
      if ("name" in payload) state.reservation.name = payload.name;
    },
    clearReservation(state) {
      state.reservation.movieId = null;
      state.reservation.seat = null;
      state.reservation.name = "";
    },
    setHistory(state, history) {
      state.history = history;
    }
  },

  
  actions: {
    async fetchMovies({ commit }) {
      try {
        const res = await axios.get(API_BASE + "/SELECT_MOVIE");
        commit("setMovies", res.data);
      } catch (error) {
        console.error("映画一覧の取得に失敗しました。", error);
      }
    },

    
    async fetchSeats({ commit }, movieId) {
      try {
        const url = API_BASE + "/SELECT_SEAT?Movieid=" + encodeURIComponent(movieId);
        const res = await axios.get(url);
        commit("setSeats", res.data);
      } catch (error) {
        console.error("座席一覧の取得に失敗しました。movieId:", movieId, error);
      }
    },

    
    async insertReservation({ state, commit }) {
      const { movieId, seat, name } = state.reservation;
      if (!movieId || !seat || !name.trim()) {
        const errMsg = "予約に必要な情報が揃っていません";
        console.error(errMsg, state.reservation);
        throw new Error(errMsg);
      }
      try {
        const payload = {
          Movieid: movieId,
          Seat: seat,
          Reservename: state.reservation.name, 
        };
        const res = await axios.post(API_BASE + "/INSERT_RESERVATION", payload);
        commit("clearReservation");
        return res.data;
      } catch (error) {
        console.error("予約送信に失敗しました。", error.response?.data || error.message);
        throw error;
      }
    },

  
    async fetchHistory({ commit }, name) {
      if (!name || !name.trim()) {
        console.error("名前が空です。予約履歴を取得できません");
        return;
      }
      try {
        const url = API_BASE + "/SELECT_HISTORY?Reservename=" + encodeURIComponent(name);
        const res = await axios.get(url);
        commit("setHistory", res.data);
      } catch (error) {
        console.error("予約履歴の取得に失敗しました。name:", name, error);
      }
    }
  },

  getters: {
    movies(state) {
      return state.movies;
    },
    seats(state) {
      return state.seats;
    },
    reservation(state) {
      return state.reservation;
    },
    history(state) {
      return state.history;
    }
  }
});









