import { useLocation } from 'react-router-dom';
import { useSlugs } from '../../context/AppContext';
import DetailsProductCard from '../../components/details/DetailsProductCard';
import DetailsFeatures from '../../components/details/DetailsFeatures';
import DetailsBox from '../../components/details/DetailsBox';
import DetailsGallery from '../../components/details/DetailsGallery';
import DetailsSuggestions from '../../components/details/DetailsSuggestions';

const DetailsOutlet = props => {
  const location = useLocation().pathname;
  const slugs = useSlugs();
  const product = slugs.find(item => item.location === location);

  return (
    <>
      <DetailsProductCard slug={product.slug} />
      <DetailsFeatures slug={product.slug} />
      <DetailsBox slug={product.slug} />
      <DetailsGallery slug={product.slug} />
      <DetailsSuggestions slug={product.slug} />
    </>
  );
};

export default DetailsOutlet;
