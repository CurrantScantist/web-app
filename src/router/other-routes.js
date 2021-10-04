import Landing from "@/views/Landing";
import Visualization from "@/views/Visualization";

export default [
  {
    path: "/",
    name: "landing",
    component: Landing,
    meta: {
      icon: "",
    },
  },
  {
    path: "/visualize/:name1&:owner1/:name2?&:owner2?",
    name: "visualize",
    component: Visualization,
    props: true,
  },
];
