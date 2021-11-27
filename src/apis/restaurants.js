import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId });
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getRestaurantShow({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  comment: {
    create({ text, restaurantId, userId }) {
      return apiHelper.post(
        `/comments`,
        { text, restaurantId, userId },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
    },
    delete(commentId) {
      return apiHelper.delete(`/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
    },
  },
};
