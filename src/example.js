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
          defaultFields={[
            {
              id: "b1f5b457-3602-44aa-a5b7-04e9788a0fe5",
              element: "TextInput",
              label: "Placeholder Label",
              required: false,
              value: [],
            },
          ]}
          defaultPreviewItems={[{"id":"bda79650-d394-425a-99d3-91bf7ce35ae9","element":"TextInput","required":false,"label":"Placeholder Label","value":""},{"id":"a5ec696e-e7c5-4660-99dd-a62780eb9d00","element":"TextInput","required":false,"label":"Placeholder Label","value":""}]}
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
