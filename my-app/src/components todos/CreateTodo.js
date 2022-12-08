import React from 'react';


const CreateTodo = ({ onChangeForm, handleSubmit }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>Todo</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="todo" 
                            placeholder="todo" 
                        />
                    </div>
                    <div className="input-group">
                        <label>category2</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="category2" 
                            placeholder="category2" 
                        />
                    </div>
                    <div className="input-group">
                        <label>isComplete</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="isComplete"
                            placeholder="isComplete" 
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => handleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;