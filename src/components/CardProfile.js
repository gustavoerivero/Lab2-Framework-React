import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Avatar, 
        Card, 
        CardActions, 
        CardContent, 
        CardHeader, 
        CardMedia, 
        Collapse, 
        Divider,
        IconButton, 
        Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { colors } from './theme/Colors';

export default function RecipeReviewCard(props) {
    
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            backgroundColor: 'paper',
            transition: 'background-color .5s',
            '&:hover': {
                backgroundColor: '#333333', 
                transition: 'background-color .5s',
            }
        },
        media: {
            height: 0,  
            paddingTop: '100%',
            maxHeight: 200,
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
                transition: theme.transitions.create('transform', {
                    duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: props.color,
        },
        favorite: {
            transition: 'color .5s',
            '&:hover': {
                color: '#ba0000',
                transition: 'color .2s',
            },
            '&:active': {
                color: '#7a0000',
            }
        },
        arrow: {
            '&:hover': {
                color: colors[0],
            },
        },
    }));

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} elevation={ 7 } >
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={ classes.avatar }>
                    { props.title.charAt(0) }
                </Avatar>
                }
                title={ props.title }
                subheader={ props.subheader }
            />
            <CardMedia
                className={classes.media}
                image={ props.image }
                title={ props.title }
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon className={ classes.favorite } />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon className={ classes.arrow } />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider />
                <CardContent>
                <Typography variant='h5' component='h3'>{ props.title }</Typography>
                <Typography paragraph>
                    { props.description }
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}