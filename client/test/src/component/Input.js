import React from 'react'

function Input(props) {
    return (
        <div className='card card-body my-3'>

            <form onSubmit ={props.handleSubmit}>
                <div className='input-group'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text bg-primary text-white'>
                            <i className='fas fa-book'></i>
                        </div>
                    </div>
                    <input type='text' 
                        value ={props.titre}
                        name = 'name'
                        onChange={props.handleChange} 
                        className='form-control text-capitalize' 
                        placeholder='movie name' />
                        

                </div>
                <button type='submit' className={props.edittitle ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}> {props.edittitle ? 'Edit Item' :"Add Item"}</button>
            </form>
        </div>

    )

}
export default Input
