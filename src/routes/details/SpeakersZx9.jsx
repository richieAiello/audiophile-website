import DetailsCard from '../../components/details/DetailsCard';
import DetailsFeatures from '../../components/details/DetailsFeatures';
import DetailsBox from '../../components/details/DetailsBox';
import DetailsGallery from '../../components/details/DetailsGallery';
import DetailsSuggestions from '../../components/details/DetailsSuggestions';

const SpeakersZx9 = props => {
  const slug = 'zx9-speaker';

  return (
    <>
      <DetailsCard slug={slug} />
      <DetailsFeatures slug={slug} />
      <DetailsBox slug={slug} />
      <DetailsGallery slug={slug} />
      <DetailsSuggestions slug={slug} />
    </>
  );
};

export default SpeakersZx9;
