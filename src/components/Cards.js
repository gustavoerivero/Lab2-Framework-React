import React from 'react'
import { Avatar, 
        Card,  
        CardActionArea,
        CardContent,
        CardHeader,
        Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Cards(props) {

    const useStyles = makeStyles(() => ({
        root: {
            width: 280,
            height: 200,
        },
        avatar: {
            backgroundColor: props.avatarColor,
        }
    }));

    const classes = useStyles();

    return (
        <Card className={ classes.root }>
            <CardActionArea className={ classes.root }>
                <CardHeader
                    avatar={
                        <Avatar arial-label='Doing' className={ classes.avatar } >
                            { props.avatarDoing }
                        </Avatar>
                    }
                    title={ props.headerTitle }
                    subheader={ props.date }
                />
                <CardContent>
                    <Typography 
                        gutterBottom variant='h7'
                        component='h2'
                    >
                        { props.title }
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                    >
                        { props.content }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
