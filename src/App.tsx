/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import VSL from './pages/VSL';
import VSLWhite from './pages/VSLWhite';
import Quiz from './pages/Quiz';
import Sales from './pages/Sales';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VSL />} />
        <Route path="/2" element={<VSLWhite />} />
        <Route path="/white" element={<VSLWhite />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/checkout" element={<Sales />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
