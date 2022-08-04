import DetailsCard from '../../components/details/DetailsCard';
import DetailsFeatures from '../../components/details/DetailsFeatures';
import DetailsBox from '../../components/details/DetailsBox';
import DetailsGallery from '../../components/details/DetailsGallery';

const HeadphonesXx992 = props => {
  const slug = 'xx99-mark-two-headphones';

  return (
    <>
      <DetailsCard slug={slug} />
      <DetailsFeatures slug={slug} />
      <DetailsBox slug={slug} />
      <DetailsGallery slug={slug} />
    </>
  );
};

export default HeadphonesXx992;
