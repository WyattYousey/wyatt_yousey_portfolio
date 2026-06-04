import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import { screenBreakMap } from '../data/screenBreaks';

export function MainLayout() {
  const screenWidth = window.innerWidth;

  return (
    <div className={`bg-(--color-page-bg) ${screenWidth > screenBreakMap.largeDesktop ? 'h-screen overflow-hidden' : 'h-fit'}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
