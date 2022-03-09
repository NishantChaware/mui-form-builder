import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { FormBuilder, FormGenerator } from "./mainIndex";
import { useState } from "react";
function Example() {
  const [data, setData] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <FormBuilder
          onSubmit={(fdata) => {
            console.log(fdata);
            setData(fdata);
          }}
        />
        {data && (
          <FormGenerator
            formData={JSON.parse(data)}
            // responseData={responseData}
            readOnly={false}
            onSubmit={(final) => console.log(final)}
          />
        )}
      </div>
    </LocalizationProvider>
  );
}

export default Example;
