const InfoProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-evenly h-10">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-1/3 ${
            currentStep > index ? 'bg-darkGreen' : 'bg-gray-200'
          } h-[3px]`}
        ></div>
      ))}
    </div>
  );
};

export default InfoProgressBar;
