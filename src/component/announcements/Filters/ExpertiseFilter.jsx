import React from 'react';

export default function ExpertiseFilter() {
  return (
    <div>
      Expertise :
      <label htmlFor="fullStack">
        <input type="checkbox" id="fullStack" name="fullStackIsChecked" />
        Full Stack
      </label>
      <label htmlFor="frontEnd">
        <input type="checkbox" id="frontEnd" name="frontEndIsChecked" />
        Front-end
      </label>
      <label htmlFor="backEnd">
        <input type="checkbox" id="backEnd" name="backEndIsChecked" />
        Back-end
      </label>
    </div>
  );
}
