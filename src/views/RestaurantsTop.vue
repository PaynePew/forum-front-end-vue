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
            <a href="#" class="btn btn-primary me-2">Dashboard</a>

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

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Judd Goyette",
      tel: "509.019.3063",
      address: "25876 Powlowski Row",
      opening_hours: "08:00",
      description: "omnis sit aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.0826577781529",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Rick Mraz",
      tel: "330.556.5862",
      address: "22617 Barry Expressway",
      opening_hours: "08:00",
      description: "Sunt reiciendis in suscipit et. Fugit quia et odit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.41894640968461",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Mariano Monahan",
      tel: "1-038-552-3977 x89554",
      address: "85525 Gilbert Mountain",
      opening_hours: "08:00",
      description: "Cupiditate dicta ipsum minima et dolorem id quos e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.04980038492193",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Cassandra Bartell",
      tel: "182.109.7794 x22179",
      address: "056 Hegmann Terrace",
      opening_hours: "08:00",
      description: "Facere quis autem autem officiis delectus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.281005439305865",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Tracey Hickle",
      tel: "1-924-462-0938 x895",
      address: "67311 Mitchell Island",
      opening_hours: "08:00",
      description: "Ut et inventore quod.\nExcepturi non omnis.\nNeque m",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.58736193883567",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Omari Fay",
      tel: "(313) 254-1007",
      address: "524 Cruz Plain",
      opening_hours: "08:00",
      description: "Quos voluptatibus sed dicta iusto vel expedita ut ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.023962332086703",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Cortney Crooks",
      tel: "109-972-9528 x8146",
      address: "51381 Daren Corner",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.97865397161172",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Dakota Gerlach",
      tel: "(346) 009-3694 x5184",
      address: "306 Koepp Turnpike",
      opening_hours: "08:00",
      description: "Eum maiores quia. Asperiores provident consectetur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.725481142050982",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Dianna Stracke",
      tel: "592.327.9844",
      address: "52573 Dorothea Cliff",
      opening_hours: "08:00",
      description: "Assumenda officia magni adipisci esse quibusdam il",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.87334284304313",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Ardella Nolan",
      tel: "(087) 082-8218 x9454",
      address: "78191 Kihn Underpass",
      opening_hours: "08:00",
      description: "Iure aperiam quia est qui. Dolorum dolorem nostrum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.17074763433729",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

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
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
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