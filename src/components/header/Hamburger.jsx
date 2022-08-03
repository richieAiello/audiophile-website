const Hamburger = props => {
  return (
    <button
      type="button"
      className={`
        hamburger relative cursor-pointer h-4 w-5
        ${props.className}
        lg:hidden
      `}
      aria-label="Click to open navigation menu."
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

export default Hamburger;
