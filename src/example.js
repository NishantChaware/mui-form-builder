import "./App.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { FormBuilder } from "./mainIndex";
function Example() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <FormBuilder onSubmit={(data) => console.log(data)} />
      </div>
    </LocalizationProvider>
  );
}

export default Example;
