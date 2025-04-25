import React from 'react'

function Card({ data }) {
    const { images, title, description } = data;
    return (

       <div className="col-3 my-2">
         <div className="card" style={{ width: "250px" }} >
            <img className="card-img-top" src={images} alt={images} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
        </div>
       </div>



    )
}

export default Card
