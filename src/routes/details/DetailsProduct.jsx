import { useLocation } from 'react-router-dom';
import DetailsProductCard from '../../components/details/DetailsProductCard';
import { useState } from 'react';
import { useSlugs } from '../../context/contexts';
import DetailsFeatures from '../../components/details/DetailsFeatures';
import DetailsBox from '../../components/details/DetailsBox';
import DetailsGallery from '../../components/details/DetailsGallery';
import DetailsSuggestions from '../../components/details/DetailsSuggestions';
import { useEffect } from 'react';

const DetailsProduct = props => {
  const location = useLocation().pathname;
  const slugs = useSlugs();
  const [product, setProduct] = useState(() => {
    return slugs.find(item => item.location === location);
  });

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <>
      <DetailsProductCard slug={product?.slug} />
      <DetailsFeatures slug={product?.slug} />
      <DetailsBox slug={product?.slug} />
      <DetailsGallery slug={product?.slug} />
      <DetailsSuggestions slug={product?.slug} />
    </>
  );
};

export default DetailsProduct;
