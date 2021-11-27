import { apiHelper } from "../utils/helpers";

export default {
  signIn({ email, password }) {
    return apiHelper.post("/signin", {
      email,
      password,
    });
  },
  singUp({ name, email, password, passwordCheck }) {
    return apiHelper.post("/signup", {
      name,
      email,
      password,
      passwordCheck,
    });
  },
};
