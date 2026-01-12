import { Link, useLoaderData } from "react-router"

export default function PostIndex() {
  const loaderData = useLoaderData();
  //console.log("loaderData", loaderData);
  const data = loaderData?.data || [];
//   console.log("data", data);
  return (
      <div>
          {data && data.length > 0 ? (
              <>
                  {data.map((item) => (
                      <div key={item.id} className="post-index">
                          <h3>
                              <Link to={`/posts/${item.id}`}>{item.title}</Link>
                          </h3>
                          <p>{item.content}</p>
                      </div>
                  ))}
              </>
          ) : (
              <p>Khong co danh muc</p>
          )}
      </div>
  );
}