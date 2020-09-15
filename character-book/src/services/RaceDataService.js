import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/races");
  }

  get(id) {
    return http.get(`/races/${id}`);
  }

  create(data) {
    return http.post("/races", data);
  }

  update(id, data) {
    return http.put(`/races/${id}`, data);
  }

  delete(id) {
    return http.delete(`/races/${id}`);
  }

  deleteAll() {
    return http.delete(`/races`);
  }

  findByTitle(title) {
    return http.get(`/races?title=${title}`);
  }
}

export default new TutorialDataService();
