import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useSelector } from "react-redux";
import { logout } from "../../../../Redux/actions/userActions";
const settings = ["Login"];
// const settings = ["Login", "Sign Up"];
const ResponsiveAppBar = () => {
  // function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {}, [userInfo]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 5 }}
            className="m-3"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Email Hub
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            className="m-1 text-white"
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Tooltip>
              {/* Login/Signup */}
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                className="p-2 text-white h-6"
              >
                <div className="p-5 m-5">
                  {userInfo ? (
                    <a
                      href="/user/profile"
                      className="text-decoration-none text-white d-flex justify-content-between"
                    >
                      <div className="side-menu-footerLogin d-flex justify-content-between">
                        <div className="avatar">
                          <img src={userInfo.pic} alt="user" />
                        </div>
                        <div className=" text-capitalize">
                          <h5 className="px-2 mt-1 h3 text-white bold">
                           Hi !   {userInfo.name}
                          </h5>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <a
                      href="/login"
                      className="text-decoration-none text-white"
                    >
                      Login
                    </a>
                  )}
                </div>

                {/* <Avatar alt="Bikash" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>

            {/* <Menu
              className="p-5"
              sx={{ mt: "145px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  className="p-2 mx-5"
                  key={setting}
                  onClick={handleCloseUserMenu}
                >
                  <a href={setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
