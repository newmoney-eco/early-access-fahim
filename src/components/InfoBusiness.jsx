import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InfoBusiness = () => (
  <div>
    <p className="pb-2 text-sm">Business Name</p>
    <Field
      type="text"
      name="businessName"
      className="w-full p-2 border rounded-lg outline outline-1 outline-gray-400 focus:outline-darkGreen"
    />
    <ErrorMessage name="businessName" component="div" />

    <p className="pb-2 text-sm pt-4">Type of Business</p>
    <Field
      type="text"
      name="businessType"
      className="w-full p-2 border rounded-lg outline outline-1 outline-gray-400 focus:outline-darkGreen"
    />
    <div className="text-sm text-gray-400 pt-2">
      <p>This name will appear on your profile</p>
      <ErrorMessage name="name" component="div" />
    </div>
  </div>
);

export default InfoBusiness;
