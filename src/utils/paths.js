export const paths = {
  home: "/",
  login: "/login",
  register: "/register",
  blog: "/blog",
  blogDetail: (id) => `/blog-detail/${id}`,

  authorDashboard: "author-dashboard",
  createBlog: "/create-blog",
  blogs: "/blogs",
  editBlog: (slug) => `/edit-blog/${slug}`,
};
