import React, {useState, forwardRef, useImperativeHandle} from 'react'
import ReactDOM from 'react-dom'

import Card from './Card/Card'

import './Modal.css'



// eslint-disable-next-line react/display-name
const Modal = forwardRef(  (props,ref)=>{
    // eslint-disable-next-line react/prop-types
    
    const [display, setDisplay] = useState(false);    
    const [pokemon,setPokemon] = useState({})
    useImperativeHandle(ref, ()=>{
        return{
            openModal: (pokemon)=> openModal(pokemon)
        }
    })

    const openModal = (pokemon)=>{
        console.log(pokemon)
        setPokemon(pokemon)
        setDisplay(true)
    }

    const closeModal = () =>{
        setDisplay(false)
        console.log(display)
    }



    if(  display ){

        return ReactDOM.createPortal(
            <div className='modal-wrapper'>
                <div onClick={closeModal} className="close__modal">Close</div>
                <div className='modal__container'>
                    <Card pokemon={pokemon}/>
                </div>
            </div>,document.getElementById('modal-root'))
        
    }
    return null
} )
export default Modal
