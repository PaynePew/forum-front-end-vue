  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
