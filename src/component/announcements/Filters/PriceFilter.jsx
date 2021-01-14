import React from 'react';

export default function PriceFilter() {
  return (
    <div>
      Prix
      <select name="price" id="price-select">
        <option value="Javascript">Croissant</option>
        <option value="React">Décroissant</option>
      </select>
    </div>
  );
}
