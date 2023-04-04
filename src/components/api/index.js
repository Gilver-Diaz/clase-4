import { useEffect ,useState} from "react";

const MyFetch = () => {
  const [data, setData] = useState('loading . . .');

  const responseToText = response => response.text();

  const responseToJson = response => response.json();

  const updateData = (realResponse) => {
    console.log(realResponse);
    setData(realResponse);
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(responseToJson)
      .then(updateData);
  }, []);

  const displayAbility = (ability) => {
    return (
      <div key={ability.ability.name}>
        <h3>{ability.ability.name}</h3>
        <p>{ability.slot}</p>
      </div>
    );
  };

  return (
    <div>
      {data.abilities?.length > 0
        ? data.abilities.map(displayAbility)
        : 'Data'}
    </div>
  );
};

export default MyFetch;