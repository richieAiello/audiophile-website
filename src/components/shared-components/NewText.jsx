import clsx from 'clsx';

const NewText = props => {
  return (
    <p
      className={`
        uppercase font-normal text-[0.875rem] tracking-[0.625rem] leading-[1.195rem]
        ${props.className}
        ${clsx({
          'text-[rgba(255,255,255,49.64%)]': props.hero,
          'text-orange': !props.hero,
        })}
      `}
    >
      New Product
    </p>
  );
};

export default NewText;
