import PostIndex from "./pages/PostIndex";
import PostStore from "./pages/PostStore";
import Posts from "./Posts";

export const routesPost = {
    path: "/posts",
    Component: Posts,
    children: [
      {
        index: true,
        Component: PostIndex,
        },
        {
            path: "store",
            Component: PostStore
        }
      
    ],
  };