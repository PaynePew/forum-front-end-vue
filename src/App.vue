<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white"></main>
    <router-view />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  name: "App",
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
