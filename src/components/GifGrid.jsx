import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category ); //HOOK PERSONALIZADO
    console.log( { isLoading } );

    return (
        <>
            <ol>
                <h2>{ category }</h2>
                {
                    isLoading && (<h2>Loading...</h2>) //CONDICIONAL PARA MOSTRAR UN LOADING
                    // isLoading ? (<h2>Loading...</h2>) : null //CONDICIONAL PARA MOSTRAR UN LOADING CON TERNARIO

                }
                <div className="card-grid">
                    {
                        <GifItem 
                        images={ images } 
                        { ...images } //TECNICA CUANDO TIENE MUCHOS PARAMETROS Y SE LAS ENVIAN DESESTRUCTURADAS
                        />
                    }
                </div>
            </ol>
        </>
    )
}