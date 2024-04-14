export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#56565b", borderRadius: "10px", width: "40px", height: "50px", zIndex: "1", display: "flex", justifyContent: "center", alignItems: "center" }}
      onClick={onClick}
    />
  );
  }

  export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#56565b", borderRadius: "10px", width: "40px", height: "50px", zIndex: "1", display: "flex", justifyContent: "center", alignItems: "center", "&:hover": { background: "green" }} }
        onClick={onClick}
        
      />
    );
  }
