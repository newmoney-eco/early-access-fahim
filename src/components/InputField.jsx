import React from 'react';

const InputField = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 my-2 border-2 border-grey-300 rounded-xl"
      />
    </div>
  );
};

export default InputField;
