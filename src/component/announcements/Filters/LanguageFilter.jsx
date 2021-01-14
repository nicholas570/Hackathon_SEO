import React from 'react';

export default function LanguageFilter() {
  return (
    <div>
      Langage :
      <select name="language" id="language-select">
        <option value="defaultLanguage">Choisir un langage</option>
        <option value="Javascript">Javascript</option>
        <option value="React">React</option>
        <option value="Java">Java</option>
        <option value="PHP">PHP</option>
      </select>
    </div>
  );
}
