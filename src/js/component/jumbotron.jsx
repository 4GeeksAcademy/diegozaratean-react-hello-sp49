// 1. Importar React
import React from 'react'
// 2. Crear componente

// 4. Importar componente
import Boton from './boton.jsx'
// 5. Usar componente
const Jumbotron = ()=>{
    return(
        <>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-1x text-success" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><g transform="translate(288 256)"><g transform="translate(192, -256)  scale(0.875, 0.875)  rotate(0 0 0)"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" transform="translate(-288 -256)"></path></g></g></svg>
             <div className="container my-5">
                <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                    <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
                    <svg className="bi mt-5 mb-3" width="48" height="48"><use xlinkHref="#check2-circle"></use></svg>
                    <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
                    <p className="col-lg-6 mx-auto mb-4">
                    This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                    </p>
                    
                    <Boton />
                    <Boton />
                    <Boton />
                </div>
            </div>
        
        </>
    );
}
// 3. Exportar componente
export default Jumbotron
