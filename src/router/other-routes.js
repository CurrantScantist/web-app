import Landing from "@/views/Landing";

export default [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/repositories/:repo_name/:repo_owner",
    name: "repository",
    component: Landing, // replace with single repository view component
  },
];
