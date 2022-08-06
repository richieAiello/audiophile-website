import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './routes/Home';
import Category from './routes/category/Category';
import CategoryHeadphones from './routes/category/CategoryHeadphones';
import CategorySpeakers from './routes/category/CategorySpeakers';
import CategoryEarphones from './routes/category/CategoryEarphones';
import Details from './routes/details/Details';
import DetailsProduct from './routes/details/DetailsProduct';
import Checkout from './routes/Checkout';

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
          <Route path="details" element={<Details />}>
            <Route path="product/:id" element={<DetailsProduct />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
