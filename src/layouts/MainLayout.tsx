import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';

export function MainLayout() {
  return (
    <div className="bg-(--color-page-bg) h-screen overflow-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
