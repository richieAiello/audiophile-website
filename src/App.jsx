import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './routes/Home';
import Category from './routes/Category';
import CategoryHeadphones from './routes/CategoryHeadphones';
import CategorySpeakers from './routes/CategorySpeakers';
import CategoryEarphones from './routes/CategoryEarphones';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category />}>
            <Route
              path="headphones"
              element={<CategoryHeadphones />}
            />
            <Route path="speakers" element={<CategorySpeakers />} />
            <Route path="earphones" element={<CategoryEarphones />} />
          </Route>
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
