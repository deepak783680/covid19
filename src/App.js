import React from "react";
import { Cards, Chart, CountryPicker } from "./Components";

import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <br />
        <text style={{ color: 'red' , fontSize:60}}>
          <b>COVID-19</b>
        </text>
        <text style={{ color: 'yellow' , fontSize:20}}>
          <i>By Deepak Verma</i>
        </text>
        <text style={{ color: 'yellow' , fontSize:60}}>
          <i>SELECT THE COUNTRY</i>
        </text>
        
        <br /><br /><br />
        
        <CountryPicker handleCountryChange={this.handleCountryChange} />

      
        <br />
        

        
<br />
<br />

        <br />
        <Cards data={data} country={country} />
        <br />


        <br />
<br />
<br />
<br />
<br />
       


      
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

