import { useState } from "react";
import CountriesTable from "../components/CountryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import { getAllCountries } from "../lib/getCountry";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");
  console.log(countries);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries.length} countries</div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by Name, Region or SubRegion"
            onChange={onInputChange}
          />
        </div>
      </div>
      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const countries = await getAllCountries();
  return {
    props: {
      countries,
    },
  };
};
