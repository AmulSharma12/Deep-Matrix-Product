import react from "react";

const StepUserName = ({onNext}) => {
  return (
    <>
      <div>StepUserName component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepUserName;
