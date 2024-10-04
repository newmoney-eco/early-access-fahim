import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signupSchema } from './validationSchemas';
import mobile from '../assets/smartphone.png';
import next from '../assets/navigate_next.png';
import whiteNext from '../assets/navigate_next_white.svg';
import GoogleButton from './GoogleButton';
import ButtonType from './ButtonType';

// input conditionally rendering phone/email etc
// take note of what actually changes, that is what will need to be conditionally rendered

const SignUp = ({ nextStep }) => {
  const [usePhone, setUsePhone] = useState(false);
  const handleSwitch = () => {
    setUsePhone((useState) => !useState);
  };

  return (
    <div>
      <Formik
        initialValues={{ userInput: '' }}
        validationSchema={signupSchema(usePhone)}
        onSubmit={nextStep}
      >
        {({ isValid, dirty }) => (
          <Form>
            <p className="text-sm text-gray-400 pb-4 ">
              Enter your {usePhone ? 'phone number' : 'email'} or switch to sign
              up via {usePhone ? 'email' : 'phone number'}.
            </p>

            {/* Input field for email or phone */}
            
              <Field
                name="userInput"
                type={usePhone ? 'tel' : 'text'}
                placeholder={usePhone ? 'Phone Number' : 'Email'}
                className="w-full p-2 border rounded-lg outline outline-1 outline-gray-400 focus:outline-darkGreen"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Prevent default Enter key behavior important when entering it automatically changing the input type
                  }
                }}
              />
              {/* Error message container */}
              <div className="h-5"> 
                <ErrorMessage
                  name="userInput"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            

           

            {/* Buttons */}
            <div className="flex py-2 space-x-3 pt-6 pb-8">
              <ButtonType
                label={`Use ${usePhone ? 'Email' : 'Phone'}`}
                icon={mobile}
                onClick={handleSwitch}
                className="bg-darkGrey text-white text-sm font-semibold  "
                iconPosition="before"
                
              />

              {/* Conditionally disabled "Next" button based on form validity */}
              <ButtonType
                type={'submit'}
                label="Next"
                icon={isValid && dirty ? whiteNext : next}
                className={` font-semibold  text-sm ${
                  isValid && dirty
                    ? 'bg-darkGreen text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
                iconPosition="after"
                disabled={!(isValid && dirty)} // Disable button if form is not valid
              />
            </div>
          </Form>
        )}
      </Formik>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-10 bg-gray-200 border-0 dark:bg-gray-300" />
          <span className="px-3 font-medium text-gray-400">or</span>
          <hr className="w-full h-px my-10 bg-gray-200 border-0 dark:bg-gray-300" />
        </div>
      </div>
      <GoogleButton />
    </div>
  );
};

export default SignUp;
