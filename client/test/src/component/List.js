import React from 'react'
import Item from './Item'

function List(props) {
    return (

        <ul className='List-group my-5'>
            <h3 className='text-capitalize text-center'> Todo List</h3>
            {
                props.titles.map(value => {
                    return(
                    <Item key={value.id}
                     title={value.title || value.Title}
                     handleDelete ={() => {props.handleDelete(value.id)}}
                     handleEdit ={() => {props.handleEdit(value.id)}}
                     />
                    )
                })
            }
        
        </ul>

    )
}

export default List
