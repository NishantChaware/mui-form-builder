import React from "react";
import { Provider } from "react-redux";
import Builder from "./components/FormBuilder";
import Generator from "./components/FormGenerator";
import store from "./store";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "./App.css";
// import "react-rangeslider/lib/index.css";
// import "./css/bootstrap.min.css";
// import "./src/App.scss";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const FormBuilder = ({
  onSubmit,
  items,
  defaultFields,
  defaultPreviewItems,
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Provider store={store}>
      <Builder
        onSubmit={onSubmit}
        items={items}
        defaultFields={defaultFields}
        defaultPreviewItems={defaultPreviewItems}
      />
    </Provider>
  </LocalizationProvider>
);

const FormGenerator = ({ formData, responseData, readOnly, onSubmit }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Provider store={store}>
      <Generator
        formData={formData}
        responseData={responseData}
        readOnly={readOnly}
        onSubmit={onSubmit}
      />
    </Provider>
  </LocalizationProvider>
);

export { FormBuilder, FormGenerator };
