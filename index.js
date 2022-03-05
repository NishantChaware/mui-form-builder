import React from 'react';
import { Provider } from "react-redux";
import Builder from "./src/components/FormBuilder";
import Generator from "./src/components/FormGenerator";
import store from "./src/store";

import "react-rangeslider/lib/index.css";
import './css/font-awesome.min.css';
// import "./css/bootstrap.min.css";
// import "./src/App.scss";

const FormBuilder = ({ onSubmit, items }) => (
	<Provider store={store}>
    <Builder 
      onSubmit={onSubmit} 
      items={items} 
    />
  </Provider>
)

const FormGenerator = ({ 
	formData, 
	responseData, 
	readOnly, 
	onSubmit 
}) => (
	<Provider store={store}>
		<Generator 
			formData={formData} 
			responseData={responseData} 
			readOnly={readOnly} 
			onSubmit={onSubmit} 
		/>
	</Provider>
)

export { FormBuilder, FormGenerator }