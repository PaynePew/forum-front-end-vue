<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantCard from "./../components/RestaurantCard.vue";
import RestaurantsNavPills from "./../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "./../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Ms. Zechariah Williamson",
      tel: "1-812-576-5857 x58729",
      address: "116 Randy Circle",
      opening_hours: "08:00",
      description: "Velit pariatur vel id qui eum. Non ut rerum iusto ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.08410037492145",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Crawford Feil",
      tel: "393-235-4558 x57453",
      address: "9716 Lindgren Branch",
      opening_hours: "08:00",
      description: "Quae perferendis ut aliquid voluptates quas debiti",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.93933689153806",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Murl Cassin",
      tel: "181-237-6273",
      address: "6029 Fabian Plaza",
      opening_hours: "08:00",
      description: "Consequatur neque ducimus aut et et cum corrupti n",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.63825765767636",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Manuela Schamberger",
      tel: "(104) 715-0771",
      address: "7104 Schuster Throughway",
      opening_hours: "08:00",
      description: "Corporis sed vitae quisquam. Aut illo sunt quidem ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.007731174605645",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Hillard Moore",
      tel: "669.096.5534",
      address: "833 Schmeler Points",
      opening_hours: "08:00",
      description: "Aut exercitationem non eum libero itaque. Aut magn",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.84705120451602",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Mireille Cartwright DVM",
      tel: "484-928-9984 x2392",
      address: "13045 Benedict Haven",
      opening_hours: "08:00",
      description: "voluptas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.837809456789095",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Sophie Roberts Jr.",
      tel: "(158) 382-9245",
      address: "1879 Altenwerth Springs",
      opening_hours: "08:00",
      description: "Quo et laudantium. Facilis porro numquam. Optio qu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.794929040026105",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Alan Zulauf",
      tel: "(829) 007-3015 x68723",
      address: "547 Weimann Brook",
      opening_hours: "08:00",
      description: "Animi adipisci voluptatem sed rerum esse optio mod",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.05548470965415",
      viewCounts: 0,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-07T18:00:59.000Z",
        updatedAt: "2021-11-07T18:00:59.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Imogene Considine",
      tel: "378-454-8170",
      address: "714 Marvin Manor",
      opening_hours: "08:00",
      description: "sequi nam labore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.36368444396628",
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
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categroies: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>