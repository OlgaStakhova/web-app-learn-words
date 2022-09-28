import { Navigate, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { AddNewWord } from './components/AddNewWord';
import { Training } from './components/Training';
import { ResultsHistory } from './components/ResultsHistory';
import { WordsList } from './components/WordsList';

export const App: FC = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
          <Route
              path="/"
              element={<WordsList />}
            />

            <Route path="home" element={<Navigate to="/" replace />} />
            {/* <Route path="/home" element={<WordsList />} /> */}

            <Route path="/newWord" element={<AddNewWord />} />

            <Route path="/training" element={<Training />} />

            <Route path="/resultsHistory" element={<ResultsHistory />} />

            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}


