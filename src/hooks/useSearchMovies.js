import { useQuery } from "react-query";
import { apiUrls, baseURLs } from "../constants";
import callApi from "../api/callApi";

const discoverMovies = async () => {
  return callApi({
    method: "get",
    baseURL: baseURLs.discover,
    url: apiUrls.discover,
    params: { sort_by: "popularity.desc" },
  });
};

const searchMovies = async (searchText) => {
  return callApi({
    method: "get",
    baseURL: baseURLs.discover,
    url: apiUrls.search,
    params: { query: searchText },
  });
};

const useSearchMovies = (searchText = "") => {
  const query = useQuery(
    [searchText],
    () => (searchText === "" ? discoverMovies() : searchMovies(searchText)),
    {
      placeholderData: [],
      select: (data) => {
        return data.results;
      },
      keepPreviousData: true,
    }
  );
  return query.data || {};
};

export default useSearchMovies;
