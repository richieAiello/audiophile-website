import useFindProduct from '../../hooks/useFindProduct';
import DetailsSuggestionsCard from './DetailsSuggestionsCard';

const DetailsSuggestions = props => {
  const product = useFindProduct(props.slug);
  const suggestions = product?.others;

  return (
    <section className="mb-[10.75rem] lg:mb-60" slug={props.slug}>
      <h2 className="heading text-center mb-10 md:mb-14 lg:mb-16">
        You may also like
      </h2>
      <div className="grid gap-y-14 md:grid-flow-col md:gap-x-3 lg:gap-x-[1.875rem]">
        <DetailsSuggestionsCard item={suggestions?.[0]} />
        <DetailsSuggestionsCard item={suggestions?.[1]} />
        <DetailsSuggestionsCard item={suggestions?.[2]} />
      </div>
    </section>
  );
};

export default DetailsSuggestions;
