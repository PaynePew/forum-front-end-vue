<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">餐廳評論網</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ms-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          v-if="currentUser.isAdmin"
          class="text-white me-3"
          to="/admin"
          >管理員後台</router-link
        >

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link
            class="text-white me-3"
            :to="{ name: 'user', params: { id: currentUser.id } }"
            >{{ currentUser.name || "使用者" }} 您好</router-link
          >
          <button
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
            type="button"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>
