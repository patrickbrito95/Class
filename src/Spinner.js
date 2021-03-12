import React from 'react';

const Spinner = (props) => {
    return (
    <div class="huge ui active dimmer">
        {/* Caso não queira adicionar uma props dentro de um componente, podemos criar um valor padrão para componentes sem props definidas... */}
        <div class="huge ui text loader">{props.message || 'Loading...'}</div>
    </div>
    )
}


export default Spinner;