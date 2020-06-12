import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import logo from "../assets/whiteLogo.png";
import Modal from '@material-ui/core/Modal';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Welcome from "./Welcome";
import Navbar from 'react-bootstrap/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

function getModalStyle() {
    const top = 50
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);
    const userId = localStorage.getItem('userId') != null;

    const handleOpenLogin = () => {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const handleOpenRegister = () => {
        setOpenRegister(true);
    };

    const handleCloseRegister = () => {
        setOpenRegister(false);
    };

    const handleCloseSession = () => {
        localStorage.clear();
    }

    const bodyLoginForm = (
        <LoginForm />
    );

    const bodyRegisterForm = (
        <RegisterForm />
    );

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/">
                                <Logo src={logo} />
                                    Omega Travel
                            </Link>
                        </Typography>

                        <Link to="/">
                            <Button color="inherit" >Home</Button>
                        </Link>
                        {userId == '' ?
                            <Link to="/login">
                                <Button color="inherit">Login</Button>
                            </Link>
                            : ''
                        }
                        {userId == '' ?
                            <Link to="/register">
                                <Button color="inherit">Register</Button>
                            </Link>
                            : ''
                        }
                        {userId != '' ?
                            <Button color="inherit" onClick={handleCloseSession}>
                                <Link to="/">Logout</Link>
                            </Button>
                            : ''
                        }
                    </Toolbar>
                </AppBar>
                <Modal
                    open={openLogin}
                    onClose={handleCloseLogin}
                >
                    <div style={modalStyle} className={classes.paper}>
                        {bodyLoginForm}
                    </div>
                </Modal>
                <Modal
                    open={openRegister}
                    onClose={handleCloseRegister}
                >
                    <div style={modalStyle} className={classes.paper}>
                        {bodyRegisterForm}
                    </div>

                </Modal>
            </div>
        </div>
    );
}