import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './routes/Home';
import Category from './routes/category/Category';
import CategoryOutlet from './routes/category/CategoryOutlet';
import Details from './routes/details/Details';
import DetailsOutlet from './routes/details/DetailsOutlet';
import Checkout from './routes/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category />}>
            <Route path=":id" element={<CategoryOutlet />} />
          </Route>
          <Route path="details" element={<Details />}>
            <Route path=":id" element={<DetailsOutlet />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
