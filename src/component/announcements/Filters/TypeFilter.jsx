import React from 'react';

export default function TypeFilter() {
  return (
    <div>
      Type :
      <label htmlFor="stageType">
        <input type="checkbox" id="stageType" name="StageIsChecked" />
        Stage
      </label>
      <label htmlFor="alternanceType">
        <input type="checkbox" id="alternanceType" name="AlternanceIsChecked" />
        Alternance
      </label>
    </div>
  );
}
