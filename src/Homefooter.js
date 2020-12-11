import React from 'react';
import './Homebody.css';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';


function Homefooter(props) {
    return (
        <div>
            <span>{props.date}     </span>        <span><FavoriteBorderOutlinedIcon />0</span>
                      <span>    <a href="/problem"><ModeCommentOutlinedIcon/></a>    </span>
        </div>
    )
}

export default Homefooter
