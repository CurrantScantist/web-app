import Home from "@/views/Home";
import About from "@/views/About";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
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
];
