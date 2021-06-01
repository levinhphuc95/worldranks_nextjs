export const getAllCountries = async () => {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);

  const countries = await res.json();

  return countries;
};

export const getCountry = async (id) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);

  const country = await res.json();

  return country;
};
