/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react'

import './CheckBox.css'

export default function CheckBox(props) {
    const { active,toggle  } = props
    return (
            <div class="checkBox__container">
                <span>Chart View</span>
                <input class="checkbox__input tgl-light" id="checkbox_input" type="checkbox" checked={ active ? 'checked':''}/>
                <label class="checkbox__label" for="checkbox_input" onClick={()=>toggle(!active)}></label>
            </div>
    )
}
