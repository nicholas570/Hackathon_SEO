import React from 'react';

export default function LocalisationFilter() {
  return (
    <div>
      Localisation :
      <select name="localisation" id="localisation-select">
        <option value="defaultLocalisation">Choisir une localisation</option>
        <option value="">""</option>
        <option value="">""</option>
        <option value="">""</option>
      </select>
    </div>
  );
}
