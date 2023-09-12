# mui-form-builder [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/NishantChaware/mui-form-builder)

`mui-form-builder` is an npm package that provides a drag-and-drop interface for creating forms and generating API-friendly data. This documentation will guide you through the installation, usage, customization, and additional information about this package. Forms created using `mui-form-builder` seamlessly inherit the styling from the Material-UI (MUI) theme defined in your main project, ensuring a consistent look and feel.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [FormBuilder](#formbuilder)
  - [FormGenerator](#formgenerator)
  - [FormRemoteSubmitButton](#formremotesubmitbutton)
- [Styling](#styling)
- [Customization](#customization)
- [Additional Information](#additional-information)

## Installation

You can install `mui-form-builder` using npm or yarn:

```bash
npm install mui-form-builder
# or
yarn add mui-form-builder
```
## Usage
`mui-form-builder` consists of three main components that you can use in your React applications:

#### FormBuilder
The FormBuilder component allows you to create forms with a drag-and-drop interface. Here's how to use it:
```
import React from "react";
import { FormBuilder } from "mui-form-builder";

function MyFormBuilder() {
  // Define your form items, default fields, and default preview items
  const items = [...]; // Your form items
  const defaultFields = [...]; // Default fields
  const defaultPreviewItems = [...]; // Default preview items

  // Handle form submission
  const handleSubmit = (formData) => {
    // Handle the submitted form data
  };

  return (
    <FormBuilder
      onSubmit={handleSubmit}
      items={items}
      defaultFields={defaultFields}
      defaultPreviewItems={defaultPreviewItems}
    />
  );
}
```

#### FormGenerator
The FormGenerator component allows you to render and interact with previously created forms. Here's how to use it:
```
import React from "react";
import { FormGenerator } from "mui-form-builder";

function MyFormGenerator() {
  // Define your formData and other necessary props
  const formData = {...}; // Your form data
  const responseData = {...}; // Response data, if any
  const readOnly = true; // Set to true if the form is read-only
  const submit = false; // Set to true if you want to enable submission

  // Handle form submission
  const handleSubmit = (formData) => {
    // Handle the submitted form data
  };

  const handleRemoteSubmit = () => {
    // Handle remote form submission, if needed
  };

  return (
    <FormGenerator
      formData={formData}
      responseData={responseData}
      readOnly={readOnly}
      onSubmit={handleSubmit}
      submit={submit}
      setSubmit={handleRemoteSubmit}
    />
  );
}
```

#### FormRemoteSubmitButton
The FormRemoteSubmitButton component allows you to create a button for remote form submission. Here's how to use it:
```
import React from "react";
import { FormRemoteSubmitButton } from "mui-form-builder";

function MyRemoteSubmitButton() {
  // Define the onSubmitForm function for remote submission
  const onSubmitForm = () => {
    // Handle remote form submission here
  };

  return (
    <FormRemoteSubmitButton
      onSubmitForm={onSubmitForm}
      title="Submit Form Remotely"
    />
  );
}
```
## Styling
`mui-form-builder` inherits styling from the Material-UI (MUI) theme of your main project. This means that the forms created using mui-form-builder will seamlessly integrate with the styling of your application as long as you have a Material-UI theme defined in your project.

## Customization
mui-form-builder provides various options for customizing your forms. You can further customize the styling, add validation, and tailor the appearance of form elements according to your needs. Please refer to the Customization Guide for detailed instructions on how to customize your forms.

## Additional Information
### License
This package is licensed under the MIT License.

### GitHub Repository
For more information and updates, you can visit the GitHub repository.
If you encounter any issues or have questions, please feel free to open an issue on GitHub.

### Contributing
We welcome contributions from the community. If you'd like to contribute to this project, please follow our contribution guidelines.

### Changelog
For a history of changes and updates to this package, see the Changelog.
