import DetailsCard from '../../components/details/DetailsCard';
import DetailsFeatures from '../../components/details/DetailsFeatures';
import DetailsBox from '../../components/details/DetailsBox';

const SpeakersZx7 = props => {
  const slug = 'zx7-speaker';

  return (
    <>
      <DetailsCard slug={slug} />
      <DetailsFeatures slug={slug} />
      <DetailsBox slug={slug} />
    </>
  );
};

export default SpeakersZx7;
