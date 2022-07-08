import React, {useState}  from 'react'
import { Drawer as MUIDrawer, 
    ListItem, 
    List,  
    ListItemText, 
    Theme,
    useTheme, 
    makeStyles, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText, 
    DialogTitle  ,
    } from '@material-ui/core';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import MenuIcon from '@material-ui/icons/Menu'
    import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
    import ChevronRightIcon from '@material-ui/icons/ChevronRight'
    import clsx from 'clsx';
    import { RouteComponentProps, withRouter } from "react-router-dom";
    import { DataTable } from '../DataTable';
    import { CatForm } from '../CatForm'

interface CatHomeProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    h3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4ef3b4',
        textDecoration: 'none',
        backgroundColor: 'white',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
      display: 'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
      backgroundColor: '#eeb700',
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
    pageHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
      display: 'flex',
      backgroundColor: '#eeb700',
      color: 'white',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    toolbar_button: {
      marginLeft: 'auto',
      color: 'white',
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    margin_top: {
        marginTop: '50px',
    },
    font: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    leftMargin: {
        marginLeft: '240px',
    },
}))

export const CatHome = withRouter(( props:CatHomeProps ) => {
    console.log(props);
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    const handleDialogClickOpen = () => {
        setDialogOpen(true)
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false)
    };

    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Random Cat Photo',
            onClick: () => history.push('/catpictures')
        },
        {
            text: 'Sign Out',
            onClick: () => history.push('/signin')
        },
    ]

    return (
        <div className={`${classes.root} ${classes.column}`}>
            <CssBaseline /> 
            <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open })}> 
                <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit" aria-label="open-drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.font} noWrap>
                        Cat Home Datatable
                    </Typography>
                    <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>New Cat</Button>

                    {/* Dialog Pop Up */}
                    <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add New Cat</DialogTitle>
                        <DialogContent>
                            <DialogContentText></DialogContentText>
                            <CatForm />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                            <Button onClick={handleDialogClickOpen} color="primary">Done</Button>
                        </DialogActions>
                    </Dialog>
                    {/* End dialog pop-up */}
                </Toolbar>
            </AppBar>
            <MUIDrawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider /> 
                <List>
                    {itemsList.map((item, index) => { 
                        const { text, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>
            <main className={`${clsx(classes.content, {[classes.contentShift]: open,})} ${classes.leftMargin}`}>
                <div className={classes.pageHeader} />
                    <DataTable /> 
            </main>
        </div>
    )
});