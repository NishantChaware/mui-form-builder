import { v4 as uuid } from "uuid";
// import htmlToDraft from "html-to-draftjs";
// import { ContentState, EditorState, convertToRaw } from "draft-js";

// convert html to draftjs-editorState and then return raw JS
// editorState is stored as raw JS object in the Redux store
const convertHtmlToRawJs = (html) => {
  // const contentBlock = htmlToDraft(html);
  // const contentState = ContentState.createFromBlockArray(
  //   contentBlock.contentBlocks
  // );
  // const editorState = EditorState.createWithContent(contentState);
  // return convertToRaw(editorState.getCurrentContent());
  return html;
};

const html = "Placeholder Label";

export default (item) => {
  switch (item) {
    case "Header":
    case "Paragraph":
    case "Label":
      return {
        label: html,
      };

    case "Checkboxes":
      return {
        label: html,
        required: false,
        options: [
          {
            id: uuid(),
            value: "Option1",
            checked: false,
          },
          {
            id: uuid(),
            value: "Option2",
            checked: false,
          },
        ],
      };

    case "Dropdown":
      return {
        label: html,
        required: false,
        options: [
          {
            id: uuid(),
            value: "Option1",
          },
          {
            id: uuid(),
            value: "Option2",
          },
        ],
      };

    case "HyperLink":
      return {
        label: html,
        required: false,
        value: "",
      };

    case "LineBreak":
      return {};

    case "NumberInput":
      return {
        required: false,
        label: html,
        value: 0,
      };

    case "RadioButtons":
      return {
        required: false,
        label: html,
        options: [
          {
            id: uuid(),
            label: "Label1",
            value: "Value1",
            checked: false,
          },
          {
            id: uuid(),
            label: "Label2",
            value: "Value2",
            checked: false,
          },
        ],
      };
    case "Tags":
      return {
        required: false,
        label: html,
        options: [
          {
            id: uuid(),
            label: "Label1",
            value: "Value1",
          },
          {
            id: uuid(),
            label: "Label2",
            value: "Value2",
          },
        ],
      };

    case "Range":
      return {
        required: false,
        label: html,
        value: 0,
        min: 0,
        max: 5,
        step: 1,
      };

    case "Rating":
      return {
        required: false,
        label: html,
        value: 0,
        numberOfStars: 5,
      };

    case "TextInput":
      return {
        required: false,
        label: html,
        value: "",
      };
    case "MultiselectDropdown":
      return {
        label: html,
        required: false,
        value: [],
        options: [
          {
            id: uuid(),
            value: "Option1",
          },
          {
            id: uuid(),
            value: "Option2",
          },
        ],
      };
    case "FileUpload":
      return {
        label: html,
        required: false,
      };
    case "TextArea":
    case "Email":
      return {
        required: false,
        label: html,
        value: "",
      };
    case "Date":
      return {
        required: false,
        label: html,
        value: new Date(),
        maxDate: null,
        minDate: null,
      };
    case "DateTime":
      return {
        required: false,
        label: html,
        value: new Date(),
      };
    case "Signature":
      return {
        required: false,
        label: html,
        value: "",
        height: 300,
        width: 300,
      };
    default:
      return;
  }
};
