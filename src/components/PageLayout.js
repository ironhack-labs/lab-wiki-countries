import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function PageLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;
