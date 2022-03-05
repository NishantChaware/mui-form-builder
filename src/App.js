import "./App.css";
import { FormBuilder } from "./mainIndex";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <FormBuilder
          onSubmit={(data) => console.log(data)}
          items={[
            {
              key: "TextInput",
              name: "Text Input",
              icon: "fa fa-font",
            },
            {
              key: "Dropdown",
              name: "Dropdown",
              icon: "fa fa-caret-square-o-down",
            },
            {
              key: "MultiselectDropdown",
              name: "MultiselectDropdown",
              icon: "fa fa-caret-square-o-down",
            },
            {
              key: "TextArea",
              name: "Multi-line Input",
              icon: "fa fa-text-height",
            },
            {
              key: "Checkboxes",
              name: "Checkboxes",
              icon: "fa fa-check-square-o",
            },
            {
              key: "Date",
              name: "Date",
              icon: "fa fa-calendar"
            },
            {
              key: "DateTime",
              name: "DateTime",
              icon: "fa fa-calendar"
            },
            {
              key: "FileUpload",
              name: "FileUpload",
              icon: "fa fa-calendar"
            },
          ]}
        />
      </div>
    </LocalizationProvider>
  );
}

export default App;
