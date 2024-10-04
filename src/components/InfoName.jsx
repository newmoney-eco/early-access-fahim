import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InfoName = () => (
  <div className="pb-16">
    <p className="font-semibold pb-2 text-sm">Name</p>
    <Field
      type="text"
      name="name"
      className="w-full p-2 border rounded-lg outline outline-1 outline-gray-400 focus:outline-darkGreen"
    />

    <div className="text-sm text-gray-400 pt-2">
      <p>This name will appear in your account settings</p>
      <ErrorMessage name="name" component="div" />
    </div>
  </div>
);

export default InfoName;
