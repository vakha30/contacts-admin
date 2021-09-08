import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { alpha, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  InputBase,
  Button,
  Typography,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import useDebounce from "../../hooks/useDebounce";

import { logout } from "../../redux/actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header({ isAuth, currentUser, openAddModal, setSearchValue }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const debouncedSearch = useDebounce(setSearchValue, 500);

  const history = useHistory();

  const handleClickLogout = () => {
    dispatch(logout());
  };

  const handleClickLogin = () => {
    history.push("/login");
  };

  const handleAddClick = () => {
    openAddModal();
  };

  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Contscts
          </Typography>
          {isAuth ? (
            <>
              <Button>
                <AddCircleIcon
                  fontSize="large"
                  color="error"
                  onClick={handleAddClick}
                />
              </Button>
              <div className={classes.search} style={{ marginRight: "15px" }}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onChange={handleChange}
                />
              </div>
              <span
                style={{
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginRight: "30px",
                }}
              >
                {currentUser.username}
              </span>
              <Button onClick={handleClickLogout} color="inherit">
                Выйти
              </Button>
            </>
          ) : (
            <Button onClick={handleClickLogin} color="inherit">
              Войти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
