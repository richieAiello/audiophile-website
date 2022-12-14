const Shadow = props => {
  return (
    <div
      className={`
        bg-[rgba(0,0,0,.4)] absolute z-0 h-[calc(100vh-90px)] w-screen top-[5.625rem] left-0
        ${props.className}
      `}
      onClick={props.onClick}
    />
  );
};

export default Shadow;
