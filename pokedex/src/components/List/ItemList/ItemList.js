import React from 'react'

import './ItemList.css'

export default function ItemList(props) {
    // eslint-disable-next-line react/prop-types
    const {name,imagen} = props;
    return (
        <div className="ItemList">
            <img  src={imagen} className='ItemList__img' alt={'name'} />
            <div className="ItemList__data">
                <span className='ItemList__data__name'>
                    {name}
                </span>
                <span className='ItemList__data__number'>
                    001
                </span>
            </div>
        </div>
    )
}
