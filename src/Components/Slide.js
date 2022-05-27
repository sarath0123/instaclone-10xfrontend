import React from 'react';
import './Slide.css';

export default function Slide(props) {
    const {itemcontents}=props;
  return (
    <div className='slide'>
        <div className='one'>
            <div className='left'>
                <h4>{itemcontents.name}</h4>
                <p>{itemcontents.location}</p>
            </div>
            <div className='right'>
                <p className='dots'>...</p>
            </div>
        </div>
        <div className='picture'>
            <img className='picture' src={"https://instaclone-10xbackend.herokuapp.com/"+itemcontents.PostImage}/>
        </div>
        <div>
            <div className='two'>
                <div className='left1'>
                    <img className='icon' src='https://www.kindpng.com/picc/m/169-1694264_computer-icons-like-button-heart-symbol-heart-svg.png'/>
                    <img className='icon' src='https://www.kindpng.com/picc/m/141-1412822_instagram-share-icon-png-png-download-transparent-png.png'/>
                    <p className='likes'>{itemcontents.likes} likes</p>
                </div>
                <div  className='right1'>
                    <p>{itemcontents.date}</p>
                </div>
            </div>
            <div className='desc'>
                <h3>{itemcontents.description}</h3>
            </div>
        </div>
    </div>
  )
}
