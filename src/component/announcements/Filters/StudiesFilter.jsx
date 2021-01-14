import React from 'react';

export default function StudiesFilter() {
  return (
    <div>
      Niveau d&apos;études :
      <label htmlFor="bac2studies">
        <input type="checkbox" id="bac2studies" name="TypeIsChecked" />
        Bac +2
      </label>
      <label htmlFor="bac3studies">
        <input type="checkbox" id="bac3studies" name="TypeIsChecked" />
        Bac +3
      </label>
    </div>
  );
}
