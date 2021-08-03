import Repositories from "@/views/Repositories";
import About from "@/views/About";
import SingleRepository from "@/views/SingleRepository";

export default [
  {
    path: "/repositories",
    name: "repositories",
    component: Repositories,
    meta: {
      icon: "el-icon-s-home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      icon: "el-icon-info",
    },
  },
  {
    path: "/single-repository",
    name: "test-repo",
    component: SingleRepository,
    meta: {
      icon: "el-icon-info",
    },
  },
];
