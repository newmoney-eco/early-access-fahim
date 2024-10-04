import React, { useEffect, useState } from 'react';
import logo from '../assets/favicon 1.png';
import plug from '../assets/plug 2.png';
import SignUp from './SignUp';
import CodeField from './CodeField';
import WelcomeSlide from './WelcomeSlide';
import Info from './Info';

const SignupModal = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    console.log('step', step);
  }, [step]);

  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <div className="bg-white p-10 rounded-3xl min-h-[500px] h-auto shadow-lg w-full max-w-sm">
        {step !== 4 ? (
          <>
            {step !== 3 && (
              <h1 className="flex items-center justify-center pb-2">
                <img src={logo} className="h-12" />
              </h1>
            )}
            {step === 1 || step === 2 ? (
              <h1 className="font-bold text-2xl py-2">Sign Up</h1>
            ) : null}
          </>
        ) : (
          <h1 className="font-semibold text-2xl py-2 text-center">
            Welcome Unidentified User!
          </h1>
        )}

        {step === 1 && <SignUp nextStep={nextStep} />}
        {step === 2 && <CodeField nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Info nextStep={nextStep} />}
        {step === 4 && <WelcomeSlide nextStep={nextStep} />}
      </div>

      <div className="flex items-center">
        <img src={plug} className="w-4/5" />
      </div>
    </div>
  );
};

export default SignupModal;
