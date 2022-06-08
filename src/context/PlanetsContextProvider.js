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
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
  }, [planetSearch, filterByNumericValues, planets, columns, setColumns]);

  const handlePlanetSearch = ({ target }) => {
    setPlanetSearch(target.value.toLowerCase());
  };

  const handleFilterClick = () => {
    const newNumericFilter = {
      column: filterType,
      comparison: operator,
      value: Number(numberFilter),
    };
    const numericFilter = [...filterByNumericValues, newNumericFilter];
    // console.log(numericFilter);
    const columnOptions = numericFilter.reduce((acc, curr) => acc
      .filter((option) => option !== curr.column), columns);
    setColumns(columnOptions);
    setFilterByNumericValues(numericFilter);
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
    setFilterByNumericValues,
    columns,
    setColumns,
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
