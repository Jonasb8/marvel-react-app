import React from 'react';

const Heroes = ({ heroes, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='row'>
      {heroes.map(hero => (
        <div class="col-sm">
          <div className='card'>
          <div class="card-body">
            <h5 class="card-title">{hero.name}</h5>
            <p class="card-text">{hero.description}</p>
            <a href="http://www.didthanoskill.me/" class="btn btn-primary">Select for new Avengers !</a>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Heroes;
