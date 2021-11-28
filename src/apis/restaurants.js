import { apiHelper } from "./../utils/helpers";

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId });
    return apiHelper.get(`/restaurants?${searchParams.toString()}`);
  },
  getRestaurantShow({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`);
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`);
  },
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`);
  },
  comment: {
    create({ text, restaurantId, userId }) {
      return apiHelper.post(`/comments`, { text, restaurantId, userId });
    },
    delete(commentId) {
      return apiHelper.delete(`/comments/${commentId}`);
    },
  },
};
