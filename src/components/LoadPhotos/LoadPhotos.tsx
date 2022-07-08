import React, { useState } from "react";
import { Button, 
    makeStyles, 
    createStyles,
    Theme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { cat_pictures } from "../../api";

const useStyles = makeStyles((theme: Theme) => createStyles({
    reload_button: {
        color: 'Black',
        backgroundColor: 'LightGrey',
        display: 'flex',
        justifyContent: 'center',
        width: '15%',

    },
    photodiv: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    buttondiv: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2%'
    },
    image:{
        width: '60%',
        border: '3px solid grey',
    },
    imagediv: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

interface ImageProps {
    imageUrl?: string;
    data?:{}
}

export const LoadPhotos = (props:ImageProps) => {
    const [imgUrl,setUrl]=useState("https://cdn2.thecatapi.com/images/b00.jpg");
    const classes = useStyles();

    const callImg = () => {
        cat_pictures.getpictures().then(data=>setUrl(data[0].url))
    }

    return (
        <div className={classes.photodiv}>
            <CssBaseline />
            <div className={classes.buttondiv}>
            <Button className={classes.reload_button} onClick={(()=>callImg())}>Another?</Button>
            </div>
            <br></br>
            <div className={classes.imagediv}>
                <img className={classes.image} src={imgUrl} alt="Random cat pictures" />
            </div>
        </div>
    )
}
