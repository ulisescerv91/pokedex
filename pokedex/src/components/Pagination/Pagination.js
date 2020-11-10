/* eslint-disable react/prop-types */
import React,{useState} from 'react';

import './Pagination.css'

const Pagination = (props) => {
    const {itemsByPage,totalItems,offset} = props;
    const [actualSelected,setActualSelected] = useState(1)

    const totalPages = Math.ceil(totalItems / itemsByPage); 
    
    const changeSelection = (val) =>{
        setActualSelected(val)
        offset(itemsByPage * ( val - 1) )
    }

    return (
        <div className='pagination'>
            

            {
                <div className='cuadro' onClick={()=>  (actualSelected === 1) ? '' : changeSelection(actualSelected - 1 )} > {'<'} </div>
            }
            {
                actualSelected >= (totalPages - 3) ? <div className='cuadro' > {'...'} </div> : <div className='cuadro' onClick={()=>changeSelection(actualSelected)}> {actualSelected } </div>
            }
            {
                <div className='cuadro' onClick={()=> (actualSelected < (totalPages - 3)) ? changeSelection(actualSelected + 1) : '' }> {actualSelected + 1} </div>
            }
            
            {
                (actualSelected < (totalPages - 3)) ? <div className='cuadro' > {'...'} </div> : ''
            }
            
            <div className='cuadro'  onClick={()=>   actualSelected >=changeSelection(totalPages-3)}> {totalPages-1} </div>
            <div className='cuadro'   onClick={()=>   actualSelected >=changeSelection(totalPages-3)}> {totalPages} </div>

            {
                <div className='cuadro'  onClick={()=>  ( actualSelected >= (totalPages - 3) ) ? '' :  changeSelection(actualSelected + 1)}> {'>'} </div>
            }
            


        </div>
    );
}

export default Pagination;
