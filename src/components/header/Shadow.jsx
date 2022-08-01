const Shadow = props => {
  return (
    <div
      className={`
        ${props.className}
      `}
      onClick={props.onClick}
    />
  );
};

export default Shadow;
