import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {
    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = ( { target } ) => {
        setInputValue( target.value );
    }

    // Para el form
    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length === 0 ) return;
        onNewCategory( inputValue );
        setInputValue('');
    }
    // Para el form se le envia la funcion onSubmit
    // ( event ) => onSubmit( event )
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder='Buscar gifs'
                value={ inputValue } //( event ) => inputValue( event )
                onChange={ onInputChange } //( event ) => onInputChange( event )
            />
        </form>
    )
}