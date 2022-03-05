import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormLabel,
  FormControlLabel,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { FileDropzone } from "../../Utils/file-dropzone";

const FileUpload = (props) => {
  const {
    meta,
    item,
    input,
    label,
    required,
    readOnly,
    formInput,
    generator,
    showError,
    defaultValue,
  } = props;

  const [attachPopupOpen, setAttachPopupOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const handleAttachmentClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAttachPopupOpen(false);
  };

  const handleDrop = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (file) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_file) => _file.path !== file.path)
    );
  };

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const onUpload = () => {
    setAttachPopupOpen(false);
  };
  const handleAttachmentOpen = () => {
    setAttachPopupOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        py: "1",
        px: "1",

      }}
    >
      <Dialog
        open={attachPopupOpen}
        fullWidth
        onClose={handleAttachmentClose}
        aria-labelledby="customized-dialog-title"
        aria-describedby="customized-dialog-title"
      >
        <DialogTitle>Upload</DialogTitle>
        <DialogContent>
          <FileDropzone
            accept={[".png", ".jpg", ".jpeg", ".pdf"]}
            files={files}
            onDrop={handleDrop}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
            maxFiles={10}
            onUpload={onUpload}
          />
        </DialogContent>
      </Dialog>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <FormLabel>{item.label}</FormLabel>
        <Button
          variant="contained"
          sx={{ mr: 1 }}
          onClick={handleAttachmentOpen}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default FileUpload;
