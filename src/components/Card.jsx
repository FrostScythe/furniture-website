function Card({name, description, price, image}) {
    return (
        <div className="h-80 w-64 ">
            <img className="rounded-lg" src={image} alt={name}/>
            <h3 className="text-stone-700" style={{fontSize: "20px"}}>{name}</h3>
            <p className="text-stone-400">{description}</p>
            <h5 className="text-stone-500">{price}</h5>
        </div>
    )
}

export default Card;