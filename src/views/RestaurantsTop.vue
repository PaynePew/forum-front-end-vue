<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto">
      <div
        class="row no-gutters"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge bg-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{
                name: 'restaurant-dashboard',
                params: { id: restaurant.id },
              }"
              href="#"
              class="btn btn-primary me-2"
              >Dashboard</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger me-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";


export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();
        this.restaurants = data.restaurants;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳，請稍後再試",
        });
      }
    },

    addFavorite(id) {
      this.restaurants.forEach((_restaurant) =>
        _restaurant.id === id ? (_restaurant.isFavorited = true) : _restaurant
      );
    },
    deleteFavorite(id) {
      this.restaurants.forEach((_restaurant) =>
        _restaurant.id === id ? (_restaurant.isFavorited = false) : _restaurant
      );
    },
  },
};
</script>
