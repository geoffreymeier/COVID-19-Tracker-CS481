export const getCovidStatesData = () => {
  return fetch("https://api.covidtracking.com/api/states")
  // return fetch("http://localhost:8000/tracker/api/states_data/")
    .then((res) => res.json())
    .catch(() => {
      throw "Unable to fetch COVID-19 data.";
    });
};

export const getCovidUSData = () => {
  return fetch("https://api.covidtracking.com/api/us")
  // return fetch("http://localhost:8000/tracker/api/us_data/")
    .then((res) => res.json())
    .then((data) => data[0])
    .catch(() => {
      throw "Unable to fetch COVID-19 data.";
    });
};
