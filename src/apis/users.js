import { apiHelper } from "../utils/helpers";

export default {
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`);
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`);
  },
  update({ userId, file }) {
    return apiHelper.put(
      `/users/${userId}`,
       file 
    );
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null);
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`);
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null);
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`);
  },
  getTopUsers() {
    return apiHelper.get("/users/top");
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null);
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`);
  },
};
