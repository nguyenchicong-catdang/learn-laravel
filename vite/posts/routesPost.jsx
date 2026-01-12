import { postActionStore } from "./actions/postActionStore";
import {postActionUpdate} from "./actions/postActionUpdate";
import { postLoaderIndex } from "./loaders/postLoaderIndex";
import { postLoaderShowId } from "./loaders/postLoaderShowId";
import PostIndex from "./pages/PostIndex";
import PostShowId from "./pages/PostShowId";
import PostStore from "./pages/PostStore";
import Posts from "./Posts";

export const routesPost = {
    path: "/posts",
    Component: Posts,
    children: [
      {
        index: true,
        loader: postLoaderIndex,
        Component: PostIndex,
        },
        {
          path: "store",
          action: postActionStore,
            Component: PostStore
      },
      {
        path: ":id",
        loader: postLoaderShowId,
          Component: PostShowId
      },
      // {
      //   path: ":id/edit",
      //   loader: postLoaderShowId,
      // }

      {
        path: ":id/update",
        action: postActionUpdate,
          // Component: PostUpdate
      }
      
    ],
  };