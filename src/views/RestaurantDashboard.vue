<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge bg-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Bert Schinner",
    tel: "062-259-7097 x30183",
    address: "00087 Ludwig Streets",
    opening_hours: "08:00",
    description: "est sit sunt",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=60.47242417117435",
    viewCounts: 0,
    createdAt: "2021-11-07T18:00:59.000Z",
    updatedAt: "2021-11-07T18:00:59.000Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Laboriosam quidem dolor et rerum ipsum repellendus.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$h4st6rARGb4DHcwAPqHLEOWV9NQk9qNPKnCro.MAZSSOerz1Or79e",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-07T18:00:59.000Z",
          updatedAt: "2021-11-07T18:00:59.000Z",
        },
      },
      {
        id: 51,
        text: "Accusamus quis corporis.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$h4st6rARGb4DHcwAPqHLEOWV9NQk9qNPKnCro.MAZSSOerz1Or79e",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-07T18:00:59.000Z",
          updatedAt: "2021-11-07T18:00:59.000Z",
        },
      },
      {
        id: 101,
        text: "Nesciunt quo blanditiis qui veritatis fugiat ea vitae modi.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$fm1P4dqdhnKPR1UyD1yLDu.wuZwX9q/KpTalGM1uA/nckpBpEphSq",
          isAdmin: true,
          image: null,
          createdAt: "2021-11-07T18:00:59.000Z",
          updatedAt: "2021-11-07T18:00:59.000Z",
        },
      },
    ],
  },
};
export default {
  data() {
    return {
      restaurant: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurant = {
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        viewCounts: dummyData.restaurant.viewCounts,
        commentsLength: dummyData.restaurant.Comments.length,
      };
    },
  },
};
</script>