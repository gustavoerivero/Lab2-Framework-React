import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Divider, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from './theme/Colors';
import '../assets/css/Graphics.css';
    
const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const pieOptions = {
  plugins: {
      legend: {
        display: false,
        position: "right",
        legendCallback: function(chart) {
          // Return the HTML string here.
          console.log(chart);
          return [
            
          ];
        },
        labels: {
          display: false,
        },
    },
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  relative: {
    position: "relative"
  }
};

function Graphics(props) {

  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: colors,
        hoverBackgroundColor: colors
      },
    ],
  };

  const useStyles = makeStyles(() => ({
    title: {
        textAlign: 'center',
        paddingBottom: 5,
    },
    paper: {
      padding: 15,
    },
    graphic: {
      paddingBottom: 10,
      paddingTop: 10,
    },
    subpaper: {
      padding: 10,
    },
    text: {
      paddingLeft: 20,
    },
    pieContainer: {
      width: '40%',
      height: '40%',
      top: '50%',
      left: '50%',
      position: 'absolute',
      transform: 'translate(-50%, -50%)'
    },
    relative: {
      position: 'relative',
    }
  }));

  const classes = useStyles();

  const done = props.data[0], 
        doing = props.data[1], 
        toDo = props.data[2],
        total = done + doing + toDo;

  let chartInstance = null;

  return (
    <Paper className={ classes.paper }>
      <Typography 
        variant='h4'
        component='h2'
        className={ classes.title }
      >
        Tareas
      </Typography>
      <Divider />
      <Paper
        elevation={ 0 }  
        className={ classes.graphic }
      >
        <div style={ styles.relative }>
          <Doughnut 
            data={ data } 
            options={ options }
          />
          <div style={ styles.pieContainer }>
            <Pie
              data={ data }
              options={ pieOptions }
              ref={ input => {
                chartInstance = input;
              }}
            />
          </div>
          <div id='legend' />
        </div>
      </Paper>
      <Divider />
      <Paper elevation={ 0 } className={ classes.subpaper }>
      <Typography 
          variant='h6'
          component='h2'
        >
          Porcentaje de Tareas:
        </Typography>
        <Typography 
          variant='h7'
          component='h3'
          className={ classes.text }
        >
          Hecho:  { Number((done/total*100).toFixed(2)) }%
        </Typography>
        <Typography 
          variant='h7'
          component='h3'
          className={ classes.text }
        >
          Haciendo: { Number((doing/total*100).toFixed(2)) }%
        </Typography>
        <Typography 
          variant='h7'
          component='h3'
          className={ classes.text }
        >
          Por Hacer: { Number((toDo/total*100).toFixed(2)) }%
        </Typography>
      </Paper>
    </Paper>
  );
}

export default Graphics;
