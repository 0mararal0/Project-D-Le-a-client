import "./style-buttonComponent.css";

export const ButtonComponent = ({ textButton, functionButton }) => {
  return (
    <button className="container-buttonComponent" onClick={functionButton}>
      {textButton}
    </button>
  );
};
