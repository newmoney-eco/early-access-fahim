import next from '../assets/navigate_next.png';
import whiteNext from '../assets/navigate_next_white.svg';
import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { infoNameSchema } from './validationSchemas';
import InfoProgressBar from './InfoProgressBar';
import InfoBusiness from './InfoBusiness';
import InfoName from './InfoName';
import InfoZip from './InfoZip';
import ButtonType from './ButtonType';
import favicon from '../assets/favicon 1.png';

const Info = ({ nextStep }) => {
  const [infoStep, setInfoStep] = useState(1);

  const incrementInfoStep = () => setInfoStep((prev) => prev + 1);
  const skipToNextStep = () => setInfoStep(3);
  const totalSteps = 3;

  const handleNextStep = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      if (infoStep < totalSteps) {
        setInfoStep((prev) => prev + 1);
      } else {
        nextStep();
      }
    }, 400);
  };

  return (
    <div className="flex-col justify-center items-center">
      <InfoProgressBar currentStep={infoStep} totalSteps={totalSteps} />
      <div className="flex justify-center pb-8">
        <img src={favicon} alt="" className="h-12" />
      </div>
      <p className="text-sm text-gray-400 pb-0">Step {infoStep} of 3</p>
      <h1 className="font-bold pb-8">Tell us about yourself</h1>

      <Formik
        initialValues={{
          name: '',
          businessName: '',
          businessType: '',
          zipCode: '',
        }}
        validationSchema={infoStep === 1 ? infoNameSchema : undefined}
        onSubmit={(values, { setSubmitting }) =>
          handleNextStep(values, { setSubmitting })
        }
      >
        {({ isValid, dirty }) => (
          <Form>
            {infoStep === 1 && <InfoName />}
            {infoStep === 2 && <InfoBusiness />}
            {infoStep === 3 && <InfoZip />}

            <div className="pt-3 flex flex-col items-center">
              <ButtonType
                type={'submit'}
                label="Next"
                icon={isValid && dirty ? whiteNext : next}
                className={`text-sm ${
                  isValid && dirty
                    ? 'bg-darkGreen text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
                iconPosition="after"
                disabled={!(isValid && dirty)}
              />

              {infoStep === 2 && (
                <button
                  type="button"
                  className="mt-2 text-teal-500 flex items-center"
                  onClick={skipToNextStep}
                >
                  <span className="text-sm font-semibold">Skip</span>
                  <img
                    src={whiteNext}
                    alt="Skip Icon"
                    className="h-4 fill-teal-500"
                  />
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Info;
