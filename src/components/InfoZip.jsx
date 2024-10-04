import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InfoZip = () => (
  <div className="pb-12">
    <p className="pb-2 text-sm">Zip Code</p>
    <Field
      type="text"
      name="zipCode"
      className="w-full p-2 border rounded-lg outline outline-1 outline-gray-400 focus:outline-darkGreen"
    />
    <div className="text-sm text-gray-400 pt-2">
      <p>This will help us provide custom data for your community</p>
      <ErrorMessage name="name" component="div" />
    </div>
  </div>
);

export default InfoZip;
