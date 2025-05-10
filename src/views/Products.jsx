import React from 'react';
import rani from '../../rani.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='project container mt-4'>
      <h1 className="mb-4">My Projects</h1>
      <div className="row">
        {rani.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img className="card-img-top" src={project.img} alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">{project.Name}</h4>
                <p className="card-text">{project.desc}</p>
                <Link to={`/projects/${project.id}`} className="btn btn-primary">See Profile</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
