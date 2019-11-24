import React from 'react';

const Heroes = ({ heroes, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(heroes);

  return (
    <div className='row'>
      {heroes.map(hero => (
        <div class="col-sm">
          <div className='card'>
          <div class="card-body">
            <h5 class="card-title">{hero.name}</h5>
            <p class="card-text">{hero.description}</p>
            <a href="https://marvel.fandom.com/wiki/New_Avengers_%28Earth-616%29" class="btn btn-primary">Select for new Avengers !</a>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Heroes;
