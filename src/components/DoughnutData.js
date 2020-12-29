import React, { useEffect } from 'react';
import { DoughnutBar } from "./DoughnutBar";

export const DoughnutData = ({ Light, count, setGlobalData, setcount }) => {

  useEffect(() => {
    async function fetchGlobalData() {

      if (count === 'Global') {
        const fetchG = await fetch("https://corona.lmao.ninja/v2/all?yesterday");
        const GlobalApi = await fetchG.json();
        GlobalApi &&
          setcount(await GlobalApi);
      }
      else {
        const fetchG = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
        const GlobalApi = await fetchG.json();
        GlobalApi &&
          setGlobalData(await GlobalApi);
      }
    }
    fetchGlobalData();
  }, [count, setGlobalData, setcount])

  return (
    <div>
      <DoughnutBar count={count} Light={Light} />
    </div>
  )
}
