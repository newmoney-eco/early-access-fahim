import { Formik, Form, Field, ErrorMessage } from 'formik';
import { codeSchema } from './validationSchemas';
import ButtonType from './ButtonType';
import next from '../assets/navigate_next.png';
import whiteNext from '../assets/navigate_next_white.svg';

const CodeField = ({ nextStep }) => {
  if (!nextStep) {
    console.error(nextStep, 'nextStep function is required');
    return null;
  }
  return (
    <div className="flex flex-col h-full">
      <Formik
        initialValues={{ userInput: '' }}
        validationSchema={codeSchema}
        onSubmit={nextStep}
      >
        {({ isValid, dirty }) => (
          <Form className="flex flex-col w-full ">
            <p className="text-sm text-gray-400 py-2 pb-8">
              Please enter the 4-digit code sent your email
            </p>

            <Field
              name="userInput"
              type={'text'}
              placeholder={'4-digit code'}
              className="w-full p-2 border rounded-lg outline outline-1 outline-gray-400 focus:outline-darkGreen"
            />
            
            <div className="h-5 pt-1">
              
              <ErrorMessage
                name="userInput"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex justify-center">
              <p className="text-sm font-bold pt-4 pb-32 text-teal-600">
                Send code again
              </p>
            </div>

            <div className="mt-auto">
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CodeField;

