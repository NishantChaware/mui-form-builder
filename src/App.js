import "./App.css";
import { FormBuilder } from "./mainIndex";
function App() {
  return (
    <div className="App">
      <FormBuilder
        items={[
          {
            key: "TextInput",
            name: "Text Input",
            icon: "fa fa-font",
          },
        ]}
      />
    </div>
  );
}

export default App;
