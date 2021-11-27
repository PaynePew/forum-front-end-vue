<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button :disabled="isProcessing" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  data() {
    return {
      user: [],
      isProcessing: false,
    };
  },
  mounted() {
    this.setUser();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser: function () {
      this.setUser();
    },
  },
  methods: {
    setUser() {
      const { id } = this.$route.params;
      if (this.currentUser.id !== Number(id)) {
        this.$router.push("not-found");
      }

      const profile = this.currentUser;
      this.user = {
        id: profile.id,
        name: profile.name,
        image: profile.image,
      };
    },
    handleFileChange(e) {
      const files = e.target.files;
      console.log("files", files);
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
        console.log(this.user.image);
      }
    },
    async handleSubmit(e) {
      try {
        const form = e.target;
        const formData = new FormData(form);
        if (!formData.get("name").trim()) {
          Toast.fire({
            icon: "error",
            title: "請輸入姓名",
          });
          return;
        }
        this.isProcessing = true;
        const { data } = await usersAPI.update({
          userId: this.currentUser.id,
          file: formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ path: `/users/${this.currentUser.id}` });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法更新使用者資料，請稍後再試",
        });
      }

      // this.$emit("after-submit", formData);
    },
  },
};
</script>
