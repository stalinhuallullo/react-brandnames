import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

export const BrandList = () => {

    const [ brands, setBrands ] = useState([]);
    const { socket } = useContext( SocketContext );

    useEffect(() => {
        socket.on('current-brands', (brands) => {
            setBrands( brands );
        })
        return () => socket.off('current-brands');
    }, [ socket ])


    const cambioNombre = ( event, id ) => {
        const nuevoNombre = event.target.value;
        
        setBrands( brands => brands.map( brand =>{
            if ( brand.id === id ) {
                brand.name = nuevoNombre;
            }
            return brand;
        }));
    }

    const onPerdioFoco = (id, nombre) => {
        socket.emit( 'cambiar-nombre-banda', { id, nombre });
    }

    const votar = ( id ) => {
        socket.emit( 'votar-banda', id );
    }

    const borrar = ( id ) => {
        socket.emit( 'borrar-banda', id );
    }


    const crearRows = () => {
        return (
            brands.map( brand => (
                <tr key={ brand.id }>
                    <td> 
                        <button 
                            className="btn btn-primary"
                            onClick={ () => votar( brand.id ) }
                        > +1 </button>
                    </td>
                    <td>
                        <input 
                            className="form-control"
                            value={ brand.name }
                            onChange={ (event) => cambioNombre( event, brand.id ) }
                            onBlur={ () => onPerdioFoco( brand.id, brand.name ) }
                        />
                    </td>
                    <td> <h3> { brand.votes } </h3> </td>
                    <td>
                        <button 
                            className="btn btn-danger"
                            onClick={ () => borrar( brand.id ) }
                        >
                            Borrar
                        </button>
                    </td>
                </tr>
            ))
        );
    }


    return (
        <>

            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    { crearRows() }
                </tbody>
            </table>

        </>
    )
}
