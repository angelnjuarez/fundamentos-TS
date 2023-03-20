import _ from 'lodash'; //npm i --save-dev @types/lodash

const data = [
  {
    usarname: 'nico',
    role: 'admin',
  },
  {
    usarname: 'lynn',
    role: 'seller',
  },
  {
    username: 'dal',
    role: 'seller',
  },
  {
    username: 'flynn',
    role: 'customer',
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);


