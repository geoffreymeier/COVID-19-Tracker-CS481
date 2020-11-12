export const getCovidStatesData = () => {
  return fetch("https://api.covidtracking.com/api/states")
    .then((res) => res.json())
    .catch(() => {
      throw "Unable to fetch COVID-19 data.";
    });
};

export const getCovidUSData = () => {
  return fetch("https://api.covidtracking.com/api/us")
    .then((res) => res.json())
    .then((data) => data[0])
    .catch(() => {
      throw "Unable to fetch COVID-19 data.";
    });
};
