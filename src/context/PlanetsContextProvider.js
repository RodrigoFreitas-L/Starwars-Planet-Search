import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterType, setFilterType] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);
  const [planetSearch, setPlanetSearch] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const require = await fetch(URL);
      const { results } = await require.json();
      setPlanets(results);
      setFilteredPlanets(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filteringPlanets = planets
      .filter((planet) => planet.name
        .toLowerCase()
        .includes(planetSearch));

    const multifilter = filterByNumericValues
      .reduce((acc, filter) => acc.filter((planet) => {
        switch (filter.comparison) {
        case 'maior que':
          return planet[filter.column] > filter.value;
        case 'menor que':
          return planet[filter.column] < filter.value;
        case 'igual a':
          return planet[filter.column] === filter.value.toString();
        default:
          return true;
        }
      }), filteringPlanets);

    setFilteredPlanets(multifilter);
  }, [planetSearch, filterByNumericValues, planets]);

  const handlePlanetSearch = ({ target }) => {
    setPlanetSearch(target.value.toLowerCase());
  };

  const handleFilterClick = () => {
    const newNumericFilter = {
      column: filterType,
      comparison: operator,
      value: Number(numberFilter),
    };
    setFilterByNumericValues([...filterByNumericValues, newNumericFilter]);
  };

  const handleDeleteFilter = (index) => {
    const filterToDelete = filterByNumericValues
      .filter((_filter, i) => (i !== index));
    setFilterByNumericValues(filterToDelete);
  };

  const handleEraseFilters = () => {
    setFilterByNumericValues([]);
  };

  const info = {
    filteredPlanets,
    handlePlanetSearch,
    setFilterType,
    setOperator,
    setNumberFilter,
    numberFilter,
    handleFilterClick,
    handleDeleteFilter,
    handleEraseFilters,
    filterByNumericValues,
    filterByName: { name: planetSearch },
  };

  return (
    <div>
      <PlanetsContext.Provider
        value={ info }
      >
        {children}
      </PlanetsContext.Provider>
    </div>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContextProvider;
