import { post } from "../../utils/subgraphService";

const SERVICE_URLS = {
  getAllPostsQuery: "",
};

export const getAllPostsQuery = (payload) => post(SERVICE_URLS.getAllPostsQuery, payload);
