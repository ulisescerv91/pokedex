/* eslint-disable react/prop-types */
import React,{useState} from 'react';

import './Pagination.css'

const Pagination = (props) => {
    const {itemsByPage,totalItems,offset} = props;
    const [actualSelected,setActualSelected] = useState(1)


    const totalPages = Math.ceil(totalItems / itemsByPage); 
    
    const changeSelection = (val) =>{
        setActualSelected( ( val < (totalPages - 3) ) ? val : totalPages - 3)
        offset(itemsByPage * ( val - 1) )
    }

    return (
        <div className='pagination'>            
            <div className='item arrow-left' onClick={()=>  (actualSelected === 1) ? '' : changeSelection(actualSelected - 1 )} > {'<'} </div>
            
            {
                actualSelected >= (totalPages - 3) ? <div className='item' > {'...'} </div> : <div className='item selected' onClick={()=>changeSelection(actualSelected)}> {actualSelected } </div>
            }
            
            <div className='item' onClick={()=> (actualSelected < (totalPages - 3)) ? changeSelection(actualSelected + 1) : '' }> {actualSelected + 1} </div>
            
            {
                (actualSelected < (totalPages - 3)) ? <div className='item' > {'...'} </div> : ''
            }
            
            <div className={`item`}  onClick={()=>   actualSelected >=changeSelection(totalPages-1)}> {totalPages-1} </div>
            <div className='item'   onClick={()=>   actualSelected >=changeSelection(totalPages)}> {totalPages} </div>
            
            <div className='item arrow-right'  onClick={()=>  ( actualSelected >= (totalPages - 3) ) ? '' :  changeSelection(actualSelected + 1)}> {'>'} </div>
            
        </div>
    );
}

export default Pagination;
