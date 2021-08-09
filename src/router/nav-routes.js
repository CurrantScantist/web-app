import Repositories from "@/views/Repositories";
import About from "@/views/About";
import OneOneRepoComparison from "@/views/OneOneRepoComparison";

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
    path: "/one-one-compare",
    name: "1:1 Compare",
    component: OneOneRepoComparison,
    meta: {
      icon: "el-icon-info",
    },
  },
];
