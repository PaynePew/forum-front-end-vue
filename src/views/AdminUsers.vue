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
              @click.stop.prevent="toggleUserRole(user)"
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
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

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
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get();
        this.users = [...this.users, ...data.users];
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法取得管理者資料，請稍後再試",
        });
      }
    },
    async toggleUserRole({ id, isAdmin }) {
      try {
        const willBeAdmin = !isAdmin;
        const { data, statusText } = await adminAPI.users.update({
          id,
          isAdmin: willBeAdmin.toString(),
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.users = this.users.map((user) => {
          if (user.id !== id) {
            return user;
          }
          return {
            ...user,
            isAdmin: willBeAdmin,
          };
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法變更使用者權限",
        });
      }
    },
  },
};
</script>
