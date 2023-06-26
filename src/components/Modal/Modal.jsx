import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { BoxStyled } from './ModalStyled';
import MuiModal from '@mui/material/Modal';

const Modal = ({ open, handleClose, children }) => {
  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <BoxStyled>{children}</BoxStyled>
      </Fade>
    </MuiModal>
  );
};

export default Modal;