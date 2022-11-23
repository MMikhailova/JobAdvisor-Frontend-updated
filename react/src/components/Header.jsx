import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Tabs, Tab } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Header = () => {
  const [value, setValue] = useState();
  //const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <AppBar
        position="flex"
        sx={{
          display: "flex",
          justifyContent: "right",
          margin: "0px",
          backgroundImage: "url(http://localhost:3000/assets/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "70",
        }}
      >
        <Toolbar>
          <Typography>
            <img
              src="../assets/jobadvisorlogo.jpg"
              alt="jobadvisorlogo"
              width={100}
              height={80}
            />
          </Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textcolor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorvalue="primary"
          >
            <RateReviewIcon
              sx={{
                display: { xs: "none", md: "flex", color: "black" },
                mr: -2,
              }}
            />
            <Tab label="Reviews" />
            <BusinessIcon
              //color="action"
              sx={{
                display: { xs: "none", md: "flex", color: "black" },

                mr: -2,
              }}
            />
            <Tab label="Companies" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;