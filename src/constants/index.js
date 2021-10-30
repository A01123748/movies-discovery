const baseURLs = {
  discover: "https://api.themoviedb.org/3/",
  images: "https://www.themoviedb.org/t/p/w220_and_h330_face",
  cover: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces",
};

const apiUrls = {
  discover: "discover/movie",
  search: "/search/movie",
  details: "/movie/",
};
const defaultImgUrl =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
export { baseURLs, apiUrls, defaultImgUrl };
