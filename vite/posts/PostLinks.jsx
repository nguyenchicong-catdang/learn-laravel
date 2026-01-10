import { Link } from "react-router"
export default function PostLinks() {
  return (
      <ul>
          <span>Posts</span>
          <li>
            <Link to="/posts">Posts Index</Link>
          </li>
          <li>
            <Link to="/posts/store">Post Store</Link>
          </li>
          <li>
            <Link to="/posts/categories">Post Category</Link>
          </li>
    </ul>
  )
}