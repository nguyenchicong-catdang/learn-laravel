import { useLoaderData } from "react-router";
import BtnEditPost from "../components/BtnEditPost";
export default function PostShowId() {
    const loaderData = useLoaderData();
    // console.log("PostShowId loaderData:", loaderData);
    const data = loaderData?.data || null ;
    // console.log("PostShowId data:", data);
  return (
      <div>
          {data ? (
              <div>
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                  <BtnEditPost data={data} />
              </div>
          ) : (
              <p>No post data available.</p>
          )}
      </div>
  );
}