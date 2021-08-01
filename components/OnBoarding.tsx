import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { Box, Switch } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

export default function OnBoarding() {
  const [openFirstDialog, setOpenFirstDialog] = React.useState(true);
  const [openSecondDialog, setOpenSecondDialog] = React.useState(false);
  const [openThirdDialog, setOpenThirdDialog] = React.useState(false);

  const handleClose = () => {
    setOpenFirstDialog(false);
    setOpenSecondDialog(true);
    localStorage.setItem("onBoarding","true")
  };
  const handleSkip = () => {
    setOpenFirstDialog(false);
    setOpenSecondDialog(false);
  };
  const handleCloseSecondDialog = () => {
    setOpenSecondDialog(false);
    setOpenThirdDialog(true);
  };

  const handleCloseThirdDialog = () => {
    setOpenThirdDialog(false);
  };

  return (
    <div>
      <Dialog
        open={openFirstDialog}
        onClose={handleClose}
        aria-labelledby="onBoarding"
        aria-describedby="onBoarding"
      >
        <DialogTitle>{"Welcome to my second assessment solution"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            An onboarding to show you how I solved it. You can choose if you
            want to follow the onboarding or you want to skip it
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSkip} color="default">
            Skip
          </Button>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openSecondDialog} onClose={handleCloseSecondDialog}>
        <DialogTitle>{"Lets begin!"}</DialogTitle>
        <DialogContent>
          <Box>
            You will see colors in each user row. It means the user status.
          </Box>
          <DialogContentText style={{ marginTop: "10px" }}>
            <Box display="flex">
              <FiberManualRecordRoundedIcon style={{ color: "#5fe875" }} />{" "}
              Status Active
            </Box>
            <Box display="flex">
              <FiberManualRecordRoundedIcon style={{ color: "#f25454" }} />{" "}
              Status Locked
            </Box>
          </DialogContentText>
          <Box m={1}>How change the status?</Box>
          <Box m={1}>
            Look at the switch in the status column. It looks like this
          </Box>

          <DialogContentText>
            <Box>
              <Switch color="secondary" /> This means that the user is locked
              and turning it on you can active
            </Box>
            <Box>
              <Switch color="secondary" checked /> This means that the user is
              active and turning it off you can locked
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSkip} color="default">
            Skip
          </Button>
          <Button onClick={handleCloseSecondDialog} color="secondary" autoFocus>
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openThirdDialog} onClose={handleCloseThirdDialog} fullWidth>
        <DialogTitle>{"Last one"}</DialogTitle>
        <DialogContent>
          <Box m={1}>How create a new User?</Box>
          <DialogContentText>
            Click the button &quot;CREATE NEW USER&quot;. It look like this
          </DialogContentText>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="secondary">
              Create user
            </Button>
          </Box>
          <Box m={1}>How create edit a User?</Box>
          <DialogContentText>
            you will see a icon that looks like a pencil. If you click the
            pencil you will be redirect to a form to edit the user. The icon
            look like this
            <EditIcon color="secondary" style={{ marginLeft: "5px" }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseThirdDialog} color="secondary" autoFocus>
            End
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
