import React from 'react';
import Styles from "./Retoque.module.css"
import { Box, Modal } from "@mui/material";

function Imagefolio({key,image}) {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "fit-content",
    bgcolor: 'transparent',
    border: 'none',
    boxShadow: "none",
    outline: "none",
  };
    return (
        <>
        <div onClick={handleOpen} className={Styles.imagefolio}>
            <img src={image} loading='lazy' alt={"image"+key} />
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img width={500} loading='lazy' src={image} alt="" />
        </Box>
      </Modal>
        </>
    );
}

export default Imagefolio;




