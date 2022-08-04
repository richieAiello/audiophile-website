import DetailsCard from '../../components/details/DetailsCard';
import DetailsFeatures from '../../components/details/DetailsFeatures';

const SpeakersZx9 = props => {
  const slug = 'zx9-speaker';

  return (
    <>
      <DetailsCard slug={slug} />
      <DetailsFeatures slug={slug} />
    </>
  );
};

export default SpeakersZx9;
