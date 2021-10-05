import Repositories from "@/views/Repositories";
// import About from "@/views/About";

export default [
  {
    path: "/repositories",
    name: "repositories",
    component: Repositories,
    meta: {
      icon: "el-icon-s-home",
    },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: About,
  //   meta: {
  //     icon: "el-icon-info",
  //   },
  // },
];
