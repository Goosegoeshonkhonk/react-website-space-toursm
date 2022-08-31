import React from 'react';
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
        <li className='cards_item'>
            <Link to={props.path} className='cards_item_link'>
                <figure className='cards_item_pic_wrap' data-category={props.label} >
                    <img
                        className='cards_item_img'
                        alt='Planet'
                        src={props.src}
                    />
                </figure>

                <div className='cards_item_info'>
                    <h5 className='cards_item_text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem;