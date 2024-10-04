import React from 'react';

const ButtonType = ({
  label,
  onClick,
  icon,
  className,
  iconPosition = 'before',
}) => {
  return (
    <div className="flex justify-center w-full">
      <button
        onClick={onClick}
        className={`${className} flex justify-center items-center p-2 rounded-3xl w-full`}
      >
        {icon && iconPosition === 'before' && (
          <img src={icon} className="pr-2" />
        )}
        {label}
        {icon && iconPosition === 'after' && (
          <img src={icon} className="pr-2" />
        )}
      </button>
    </div>
  );
};

export default ButtonType;
