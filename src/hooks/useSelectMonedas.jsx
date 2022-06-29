import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const useSelectMonedas = (label, opciones) => {
  
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">
                    Seleccione 
                </option>
                {opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </select>
        </>
    )
    return [SelectMonedas]
}

export default useSelectMonedas