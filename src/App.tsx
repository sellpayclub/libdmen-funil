/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import VSL from './pages/VSL';
import VSLWhite from './pages/VSLWhite';
import Quiz from './pages/Quiz';
import Sales from './pages/Sales';
import Admin from './pages/Admin';

export default function App() {
  // Flag global para forçar a renderização da página White (ideal para o Cloudflare Worker em SPAs)
  const forceWhitePage = (window as any).__FORCE_WHITE_PAGE__ === true;

  if (forceWhitePage) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<VSLWhite />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/libmen" replace />} />
        <Route path="/libmen" element={<VSL />} />
        <Route path="/2" element={<VSLWhite />} />
        <Route path="/white" element={<VSLWhite />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/checkout" element={<Sales />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/libmen" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
