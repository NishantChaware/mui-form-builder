import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  FormBuilder,
  FormGenerator,
  FormRemoteSubmitButton,
} from "./mainIndex";
import { useState } from "react";
import { Box } from "@mui/material";

function Example() {
  const [data, setData] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <FormBuilder
          onSubmit={(fdata) => {
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
          defaultPreviewItems={[
            {
              id: "bda79650-d394-425a-99d3-91bf7ce35ae9",
              element: "TextInput",
              required: true,
              label: "Placeholder Label",
              value: "",
            },
            {
              id: "a5ec696e-e7c5-4660-99dd-a62780eb9d00",
              element: "TextInput",
              required: true,
              label: "Placeholder Label",
              value: "",
            },
          ]}
        />

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <FormRemoteSubmitButton
            onSubmitForm={(form) => console.log(form)}
            title="save"
          />
        </Box>

        {data && (
          <FormGenerator
            formData={JSON.parse(data)}
            readOnly={false}
            onSubmit={(final) => {}}
          />
        )}
      </div>
    </LocalizationProvider>
  );
}

export default Example;
