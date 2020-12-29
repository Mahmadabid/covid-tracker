import React, { useEffect, useState } from 'react';
import { LineBar } from "./LineBar";

export const LineData = ({ count }) => {
  const [Globe, setGlobe] = useState();

  useEffect(() => {

    async function fetchGlobal() {
      if (count !== 'Global' && count.country) {
        const fetching = await fetch(`https://disease.sh/v3/covid-19/historical/${count.country}?lastdays=341`);
        const GlobeApi = await fetching.json();
        GlobeApi && GlobeApi.timeline &&
          setGlobe(GlobeApi.timeline);

      }
      else {
        const fetching = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=341');
        const GlobeApi = await fetching.json();
        GlobeApi &&
          setGlobe(await GlobeApi);
      }
    } fetchGlobal();

  }, [count]);
  return (
    <div>
      <LineBar Globe={Globe} count={count} />
    </div>
  )
}
