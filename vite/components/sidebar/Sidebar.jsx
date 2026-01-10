import PostLinks from '../../posts/PostLinks';
import './sidebar.scss';
export default function Sidebar() {
  return (
      <aside className="sidebar">
          <ul>
              <span>Menu</span>
              <li> Menu con</li>
          </ul>
          <ul>
              <span>Menu2</span>
              <li> Menu con2</li>
              <li> Menu con2</li>
      </ul>
      <PostLinks />
      </aside>
  );
}