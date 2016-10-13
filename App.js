import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          "age": 20,
          "name": "Hardy Caldwell",
          "id": 0
        },
        {
          "age": 34,
          "name": "Riddle Pratt",
          "id": 1
        },
        {
          "age": 40,
          "name": "Ellen Young",
          "id": 2
        },
        {
          "age": 28,
          "name": "Raymond Valdez",
          "id": 3
        },
        {
          "age": 23,
          "name": "Hyde Lynch",
          "id": 4
        },
        {
          "age": 33,
          "name": "Lidia Cohen",
          "id": 5
        },
        {
          "age": 27,
          "name": "Mckinney Guerra",
          "id": 6
        },
        {
          "age": 18,
          "name": "Sybil Graves",
          "id": 7
        },
        {
          "age": 38,
          "name": "Phelps Mckay",
          "id": 8
        },
        {
          "age": 33,
          "name": "Socorro Patel",
          "id": 9
        },
        {
          "age": 37,
          "name": "Rodriguez Weaver",
          "id": 10
        },
        {
          "age": 34,
          "name": "Nieves Juarez",
          "id": 11
        },
        {
          "age": 26,
          "name": "Cohen Mercado",
          "id": 12
        },
        {
          "age": 41,
          "name": "Osborn Vasquez",
          "id": 13
        },
        {
          "age": 38,
          "name": "Justine Joyner",
          "id": 14
        },
        {
          "age": 25,
          "name": "Snyder Cox",
          "id": 15
        },
        {
          "age": 24,
          "name": "Jaime Hall",
          "id": 16
        },
        {
          "age": 37,
          "name": "Tracey Hubbard",
          "id": 17
        },
        {
          "age": 37,
          "name": "Vasquez Mcpherson",
          "id": 18
        },
        {
          "age": 28,
          "name": "Neva Houston",
          "id": 19
        },
        {
          "age": 18,
          "name": "Castaneda Castaneda",
          "id": 20
        },
        {
          "age": 32,
          "name": "Rosalinda Carter",
          "id": 21
        },
        {
          "age": 26,
          "name": "Susanne Sweet",
          "id": 22
        },
        {
          "age": 39,
          "name": "Andrea Bernard",
          "id": 23
        },
        {
          "age": 21,
          "name": "Ware Martin",
          "id": 24
        }
      ]
    }
  }
  render() {
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person} />
    });

    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default App;