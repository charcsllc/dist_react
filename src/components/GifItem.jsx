export const GifItem = ({ images }) => {

    return (
        <>
            {
                images.map(({ id, title, url }) => (
                    <div className="card" key={ id }>
                        <h6>{ title }</h6>
                        <h6>{ id }</h6>
                        <li><img src={ url } alt={ title } /></li>
                    </div>
                ))
            }
        </>
    )
};