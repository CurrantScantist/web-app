import Landing from "@/views/Landing";
import OneOneRepoComparison from "@/views/OneOneRepoComparison";

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
    path: "/repository_view/:name/:owner",
    name: "repository_view",
    component: OneOneRepoComparison,
    props: true,
  },
];
