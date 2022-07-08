import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire';

const useStyles = makeStyles({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: `#eeb700`,
        zIndex: 1,
        borderBottom: '1px solid grey',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '100%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '25px',
    },
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                <Suspense fallback={'loading...'}>
                    <AuthCheck fallback={
                        <li>
                            <Link to="/signin" className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                        </li>
                        }>
                        <li>
                            <Button>
                            <Link to='/cathome' className={`${classes.navbarItem} ${classes.psides}`}>Cat Home</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                            <Link to='/catpictures' className={`${classes.navbarItem} ${classes.psides}`}>Search For Cat Pictures Here!</Link>
                            </Button>
                        </li>
                    </AuthCheck>
                </Suspense>
                </ul>
            </div>
        </div>
    )
}
