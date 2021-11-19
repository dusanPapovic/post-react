import axios from "axios";

class PostsService {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost:3000/api",
    });
  }

  async getAll() {
    try {
      const { data } = await this.httpClient.get("/posts");
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }

  async add(post) {
    try {
      const { data } = await this.httpClient.post("/posts", post);
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }

  async get(id) {
    try {
      const { data } = await this.httpClient.get(`/posts/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }

  async edit(id, post) {
    try {
      const { data } = await this.httpClient.put(`/posts/${id}`, post);
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }

  async delete(id) {
    try {
      const { data } = await this.httpClient.delete(`/posts/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }

  async addComment(comment,post_id) {
    try {
      const { data } = await this.httpClient.post(`/posts/${post_id}/comments`, comment);
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }

  async getComments(post_id) {
    try {
      const { data } = await this.httpClient.get(`/posts/${post_id}/comments`);
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }

}

export default new PostsService();