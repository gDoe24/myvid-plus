import { Fragment } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar(props){

    const percentage = parseInt(props.rating) * 10;

    return(
        <Fragment>
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`}
                styles={buildStyles({
                    textSize: '24px',
                    pathColor:'#8b2fc9',
                    trailColor: 'rgba(80, 80, 80, .8)',
                    textColor: '#FFFFFF',
                    backgroundColor: '#3e98c7'
                })} />
        </Fragment>
    )
}