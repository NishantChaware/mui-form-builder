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
              options: [
                {
                  id: "7447470c-970c-4e7c-8828-34e0cae0fc1c",
                  value: "Option1",
                },
                {
                  id: "f5d332cc-c4bc-4c70-aaaf-083f47ad382f",
                  value: "Option2",
                },
              ],
            },
          ]}
          // defaultPreviewItems={[{"id":"94ef54cb-e953-45f2-b50d-02ec2bf5f0e0","element":"TextInput","required":false,"label":"Placeholder Label","value":""}]}
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
