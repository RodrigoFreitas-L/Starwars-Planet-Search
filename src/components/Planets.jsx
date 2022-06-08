import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Planets() {
  const {
    filteredPlanets,
    handlePlanetSearch,
    handleFilterClick,
    filterType,
    setFilterType,
    setOperator,
    setNumberFilter,
    numberFilter,
    handleDeleteFilter,
    handleEraseFilters,
    filterByNumericValues,
    columns,
  } = useContext(PlanetsContext);

  // const INITIAL_STATE_COLUMNS = [
  //   'population',
  //   'orbital_period',
  //   'diameter',
  //   'rotation_period',
  //   'surface_water',
  // ];

  // const [selectOptions, setSelectOptions] = useState(INITIAL_STATE_COLUMNS);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handlePlanetSearch }
        placeholder="Search Planet"
      />
      <label htmlFor="numeric">
        <select
          name="numeric"
          id="numeric"
          data-testid="column-filter"
          value={ filterType }
          onChange={ ({ target }) => setFilterType(target.value) }
        >
          {columns.map((column) => (
            <option
              key={ column }
              value={ column }
            >
              { column }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="range">
        <select
          name="range"
          id="range"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setOperator(target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        value={ numberFilter }
        onChange={ ({ target }) => setNumberFilter(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilterClick() }
      >
        Filter
      </button>
      { filterByNumericValues.map((filter, i) => (
        <div key={ `${filter.comparison}-${i}` }>
          {`${filter.comparison}
            ${filter.column} 
            ${filter.value}`}
          <button
            type="button"
            data-testid="filter"
            onClick={ () => handleDeleteFilter(i) }
          >
            Delete Filter
          </button>

        </div>
      )) }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => handleEraseFilters() }
      >
        Erase Filter(s)
      </button>
      <table>
        <thead>
          <tr>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>films</th>
            <th>gravity</th>
            <th>name</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { filteredPlanets.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.name}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

// Planets.propTypes = {
//   map: PropTypes.func.isRequired,
// };

export default Planets;
