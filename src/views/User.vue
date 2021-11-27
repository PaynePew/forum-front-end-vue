<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />
        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />
        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard";
import UserFollowingsCard from "../components/UserFollowingsCard";
import UserFollowersCard from "../components/UserFollowersCard";
import UserCommentsCard from "../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      user: {},
      isFollowed: false,
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchProfile(userId);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchProfile(id);
    next();
  },

  methods: {
    async fetchProfile(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        const profile = data.profile;
        this.user = {
          id: profile.id,
          name: profile.name,
          image: profile.image,
          email: profile.email,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length,
          followingsLength: profile.Followings.length,
          followersLength: profile.Followers.length,
        };
        this.isFollowed = data.isFollowed;
        this.followings = [...this.followings, ...profile.Followings];
        this.followers = [...this.followers, ...profile.Followers];
        this.comments = [...this.comments, ...profile.Comments];
        this.favoritedRestaurants = [
          ...this.favoritedRestaurants,
          ...profile.FavoritedRestaurants,
        ];
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "目前無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>
