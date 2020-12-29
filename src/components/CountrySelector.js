import React, { useContext } from 'react';
import { countries } from "./Countries";
import { Globalbar } from "../context/GlobalState";

export const CountrySelector = ({ setcount, Light }) => {

  const Glob = useContext(Globalbar);
  return (
    <div className="selector">
      <label htmlFor="country" style={{ color: 'black' }} className={Light[0] ? '' : 'darkend'}>Select:<span>&nbsp;</span> </label>
      <select id="country" name="country" className="country" onChange={(e) => { setcount(e.target.value) }} onChangeCapture={(e) => { Glob[1](e.target.value) }}>
        <option value="Global">Global</option>
        {countries.map((cal, ind) => <option value={cal.country} key={ind} >{cal.country}</option>)}
      </select>
    </div>
  )
}
