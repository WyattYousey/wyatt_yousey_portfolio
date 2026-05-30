import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { MainLayout } from '../layouts/MainLayout';

export default function AppRoutes() {
  return (
    <Routes>
  <Route element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="experience" element={<Experience />} />
    <Route path="skills" element={<Skills />} />
    <Route path="projects" element={<Projects />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>
  );
}
