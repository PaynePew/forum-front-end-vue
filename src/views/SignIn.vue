<template>
  <div class="container py-5">
    <form action class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 fw-normal">Sign In</h1>
      </div>
      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          name="email"
          type="email"
          id="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">password</label>
        <input
          v-model="password"
          name="password"
          type="password"
          id="password"
          class="form-control"
          placeholder="password"
          autocomplete="current-password"
        />
      </div>
      <button
        :disabled="isProcessing"
        class="btn btn-primary btn-lg w-100 mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2021-2022</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";
export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
 async handleSubmit () {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }

        this.isProcessing = true

        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })

        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        localStorage.setItem('token', data.token)

        this.$router.push('/restaurants')
      } catch (error) {
        this.password = ''
        this.isProcessing = false

        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
      }
    }
  }
};
</script>
