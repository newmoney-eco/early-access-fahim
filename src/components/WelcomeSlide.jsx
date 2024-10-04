import React from 'react';
import welcome from '../assets/welcome-img.png';
import leaf from '../assets/leaf.png';
import ButtonType from './ButtonType';
import whiteNext from '../assets/navigate_next_white.svg';

const WelcomeSlide = () => {
  return (
    <div className="flex items-center flex-col justify-center">
      <p className="text-sm text-gray-400 pb-4 text-center">
        Congratulations, you’re our 29th user. We’re excited for you to start
        your climate journey with us!
      </p>
      <img src={welcome} alt="" />

      <h2 className="font-semibold text-lg py-2">With New Money, you can:</h2>

      <ul className="list-none py-4">
        <li className="flex items-center mb-2">
          <img src={leaf} alt="bullet" className="h-6 w-6 mr-2" />
          <span className="text-xs font-semibold text-gray-400">
            Monitor your energy consumption in real time with our climate plug
          </span>
        </li>
        <li className="flex items-center mb-2">
          <img src={leaf} alt="bullet" className="h-6 w-6 mr-2" />
          <span className="text-xs font-semibold text-gray-400">
            Receive cash incentives based on climate action
          </span>
        </li>
        <li className="flex items-center">
          <img src={leaf} alt="bullet" className="h-6 w-6 mr-2" />
          <span className="text-xs font-semibold text-gray-400">
            Access free ESG marketing
          </span>
        </li>
      </ul>
      <ButtonType
        type={'submit'}
        label="Next"
        icon={whiteNext}
        iconPosition="after"
        className="text-sm bg-darkGreen text-white"
      />
    </div>
  );
};

export default WelcomeSlide;
