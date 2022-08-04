import DetailsCard from '../../components/details/DetailsCard';
import DetailsFeatures from '../../components/details/DetailsFeatures';

const SpeakersZx7 = props => {
  const slug = 'zx7-speaker';

  return (
    <>
      <DetailsCard slug={slug} />
      <DetailsFeatures slug={slug} />
    </>
  );
};

export default SpeakersZx7;
