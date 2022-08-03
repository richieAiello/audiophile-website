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
import EarphonesYx1 from './routes/details/EarphonesYx1';
import HeadphonesXx59 from './routes/details/HeadphonesXx59';
import HeadphonesXx991 from './routes/details/HeadphonesXx991';
import HeadphonesXx992 from './routes/details/HeadphonesXx992';
import SpeakersZx7 from './routes/details/SpeakersZx7';
import SpeakersZx9 from './routes/details/SpeakersZx9';
import Checkout from './routes/Checkout';
import DataContext from './Context/DataContext';
import { useState } from 'react';
import useAxiosData from './hooks/useAxiosData';

const App = () => {
  const [data, setData] = useState([]);

  useAxiosData(setData);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <DataContext.Provider value={data}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category" element={<Category />}>
              <Route
                path="headphones"
                element={<CategoryHeadphones />}
              />
              <Route path="speakers" element={<CategorySpeakers />} />
              <Route
                path="earphones"
                element={<CategoryEarphones />}
              />
            </Route>
            <Route path="details" element={<Details />}>
              <Route
                path="xx99-mark-two-headphones"
                element={<HeadphonesXx992 />}
              />
              <Route
                path="xx99-mark-one-headphones"
                element={<HeadphonesXx991 />}
              />
              <Route
                path="xx59-headphones"
                element={<HeadphonesXx59 />}
              />
              <Route path="zx9-speaker" element={<SpeakersZx9 />} />
              <Route path="zx7-speaker" element={<SpeakersZx7 />} />
              <Route
                path="yx1-earphones"
                element={<EarphonesYx1 />}
              />
            </Route>
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </DataContext.Provider>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
