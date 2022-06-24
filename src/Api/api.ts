import axios from "axios";

export const userService = {
  async getUsers() {
    try {
      const response = await axios.get(
        " https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getProfile(id: number) {
    try {
      const response = await axios.get(
        ` https://jsonplaceholder.typicode.com/users/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
