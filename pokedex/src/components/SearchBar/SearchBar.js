import React, {Fragment} from 'react'

export default function SearchBar(props) {
    // eslint-disable-next-line react/prop-types
    const { change} = props;

    

    return (
        <Fragment>
            <input onChange={change} />
        </Fragment>
    )
}
