<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="user.id !== 1"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

const dummyUsers = {
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
    },
  ],
};

export default {
  components: {
    AdminNav,
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
      this.users = [...this.users, ...dummyUsers.users];
    },
    toggleUserRole(userId) {
      this.users.forEach((_user) => {
        _user.id === userId ? (_user.isAdmin = !_user.isAdmin) : _user;
      });
    },
  },
};
</script>