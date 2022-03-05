import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import UploadImage from "./undraw_add_file2_gvbb.svg";

const bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) {
    return "0 Bytes";
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const FileDropzone = (props) => {
  const {
    accept,
    disabled,
    files,
    getFilesFromEvent,
    maxFiles,
    maxSize,
    minSize,
    noClick,
    noDrag,
    noDragEventsBubbling,
    noKeyboard,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onFileDialogCancel,
    onRemove,
    onRemoveAll,
    onUpload,
    preventDropOnDocument,
    ...other
  } = props;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxFiles,
    maxSize,
    minSize,
    onDrop,
  });

  return (
    <div {...other}>
      <Box
        sx={{
          alignItems: "center",
          border: 1,
          borderRadius: 1,
          borderStyle: "dashed",
          borderColor: "divider",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          outline: "none",
          p: 6,
          ...(isDragActive && {
            backgroundColor: "action.active",
            opacity: 0.5,
          }),
          "&:hover": {
            backgroundColor: "action.hover",
            cursor: "pointer",
            opacity: 0.5,
          },
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Box
          sx={{
            "& img": {
              width: 100,
            },
          }}
        >
          <img alt="Select file" src={UploadImage} />
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">
            {`Select file${maxFiles && maxFiles === 1 ? "" : "s"}`}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              {`Drop file${maxFiles && maxFiles === 1 ? "" : "s"}`}{" "}
              <Link underline="always">browse</Link> thorough your machine
            </Typography>
          </Box>
        </Box>
      </Box>
      {files.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <List>
            {files.map((file) => (
              <ListItem
                key={file.path}
                sx={{
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  "& + &": {
                    mt: 1,
                  },
                }}
              >
                <ListItemIcon>
                  <ContentCopyIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  primaryTypographyProps={{
                    color: "textPrimary",
                    variant: "subtitle2",
                  }}
                  secondary={
                    typeof file.size === "string"
                      ? file.size
                      : bytesToSize(file.size)
                  }
                />
                <Tooltip title="Remove">
                  <IconButton
                    edge="end"
                    onClick={() => onRemove && onRemove(file)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
            }}
          >
            <Button onClick={onRemoveAll} size="small" type="button">
              Remove All
            </Button>
            <Button
              onClick={onUpload}
              size="small"
              sx={{ ml: 2 }}
              type="button"
              variant="contained"
            >
              Upload
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};

FileDropzone.propTypes = {
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  disabled: PropTypes.bool,
  files: PropTypes.array,
  getFilesFromEvent: PropTypes.func,
  maxFiles: PropTypes.number,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  noClick: PropTypes.bool,
  noDrag: PropTypes.bool,
  noDragEventsBubbling: PropTypes.bool,
  noKeyboard: PropTypes.bool,
  onDrop: PropTypes.func,
  onDropAccepted: PropTypes.func,
  onDropRejected: PropTypes.func,
  onFileDialogCancel: PropTypes.func,
  onRemove: PropTypes.func,
  onRemoveAll: PropTypes.func,
  onUpload: PropTypes.func,
  preventDropOnDocument: PropTypes.bool,
};

FileDropzone.defaultProps = {
  files: [],
};
