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
              id: "b1f5b457-3602-44aa-a5b7-04e97845dfgg",
              element: "TextInput",
              label: "Placeholder Label",
              required: false,
              value: "",
            },
            {
              id: "b1f5b457-3602-44aa-a5b7-090399o3334d",
              element: "TextInput",
              label: "Placeholder Label",
              required: true,
              value: "",
            },
            {
              id: "bda79650-d394-425a-99d3-91bf7ce35ae9",
              element: "Dropdown",
              required: false,
              label: "Placeholder Label",
              options: [
                {
                  id: "b5fab867-711e-4dc6-8743-7b103b8abna8",
                  value: "Option2",
                },
                {
                  id: "6467a65a-473c-4e4e-8c49-4df5d5d9cl34",
                  value: "Option1",
                },
              ],
              value: [],
            },
            {
              id: "a5ec696e-e7c5-4660-99dd-a62780eb9d00",
              element: "MultiselectDropdown",
              required: true,
              label: "Placeholder Label",
              options: [
                {
                  id: "b5fab867-711e-4dc6-8743-7b103b8ab9af",
                  value: "Option2",
                },
                {
                  id: "6467a65a-473c-4e4e-8c49-4df5d5d9c951",
                  value: "Option1",
                },
              ],
            },
          ]}
        />

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <FormRemoteSubmitButton
            onSubmitForm={(form) =>
              console.log(JSON.stringify(form.form.values))
            }
            title="save"
          />
        </Box>

        {data && (
          <FormGenerator
            formData={JSON.parse(data)}
            readOnly={false}
            onSubmit={(final) => {
              console.log(final);
            }}
          />
        )}
      </div>
    </LocalizationProvider>
  );
}

export default Example;
