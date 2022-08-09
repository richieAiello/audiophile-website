import useFindProduct from '../../hooks/useFindProduct';
import DetailsSuggestionsCard from './DetailsSuggestionsCard';

const DetailsSuggestions = props => {
  const product = useFindProduct(props.slug);
  const suggestions = product?.others;

  return (
    <section className="mb-[10.75rem]" slug={props.slug}>
      <h2 className="heading text-center mb-10">You may also like</h2>
      <div className="grid gap-y-14">
        <DetailsSuggestionsCard item={suggestions?.[0]} />
        <DetailsSuggestionsCard item={suggestions?.[1]} />
        <DetailsSuggestionsCard item={suggestions?.[2]} />
      </div>
    </section>
  );
};

export default DetailsSuggestions;
