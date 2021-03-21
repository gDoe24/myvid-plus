import { Fragment } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../styles/progressBar.css';

export default function ProgressBar(props){

    console.log(typeof(props.rating));
    const percentage = parseInt(props.rating) * 10;

    return(
        <Fragment>
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`}
                styles={buildStyles({
                    textSize: '24px',
                    pathColor:'#8b2fc9',
                    trailColor: 'rgba(80, 80, 80, .5)',
                    textColor: '#FFFFFF',
                    backgroundColor: '#3e98c7'
                })} />
        </Fragment>
    )
}