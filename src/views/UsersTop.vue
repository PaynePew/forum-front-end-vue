<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge bg-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowed(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowed(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$fm1P4dqdhnKPR1UyD1yLDu.wuZwX9q/KpTalGM1uA/nckpBpEphSq",
      isAdmin: true,
      image: null,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$h4st6rARGb4DHcwAPqHLEOWV9NQk9qNPKnCro.MAZSSOerz1Or79e",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$S70KXTrhpc9suwzAfrKbyeNz3q1cWkm0BnN0pdYj.jK8TMuKHVEae",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-07T18:00:59.000Z",
      updatedAt: "2021-11-07T18:00:59.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
    addFollowed(id) {
      this.users.forEach((_user) =>
        _user.id === id ? (_user.isFollowed = true) : _user
      );
    },
    deleteFollowed(id) {
      this.users.forEach((_user) =>
        _user.id === id ? (_user.isFollowed = false) : _user
      );
    },
  },
};
</script>