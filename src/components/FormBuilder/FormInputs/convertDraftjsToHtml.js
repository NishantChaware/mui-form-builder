const convertToHtml = (label) => {
  // const content = EditorState.createWithContent(
  //   convertFromRaw(label)
  // );
  // return draftToHtml(convertToRaw(content.getCurrentContent()))
  //   .replace(/<p>/g, "")
  //   .replace(/<\/p>/g, "");

  return label;
};

export default convertToHtml;
