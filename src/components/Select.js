import React, { Component } from 'react'
import "./App.css"

class Select extends Component {
     state = {
         valueOne: "",
         valueTwo: "",
         rate: "",
         numOne : 0,
         numTwo : 0
     }

     handleChange1 = (e) => {
         this.setState({valueOne: e.target.value})    
     }

     handleChange2 =(e) => {
        this.setState({valueTwo: e.target.value})
     }

     handleNum1Change = (e) => {
        this.setState({numOne: e.target.value})

     }
    
     handleSubmit = (e) => {
         fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.valueOne}`)
         .then(res=> res.json())
         .then(data => {
             const exchangeRate = data.rates[this.state.valueTwo];
             const diff = `1 ${this.state.valueOne} = ${exchangeRate} ${this.state.valueTwo}`;
             this.setState({rate: diff });
             this.setState({numTwo: Number(this.state.numOne * exchangeRate).toFixed(2)})  
            });
         e.preventDefault();     
     }


    render() {
        return (
            <div>
               <form onSubmit = {this.handleSubmit}>
                 <div className="currency-one">
                  <div>
                   <select id= "currency-one" value ={this.state.valueOne} onChange = {this.handleChange1}>
                     <option value="AED">AED</option>
                     <option value="ARS">ARS</option>
                     <option value="AUD">AUD</option>
                     <option value="BGN">BGN</option>
                     <option value="BRL">BRL</option>
                     <option value="BSD">BSD</option>
                     <option value="CAD">CAD</option>
                     <option value="CHF">CHF</option>
                     <option value="CLP">CLP</option>
                     <option value="CNY">CNY</option>
                     <option value="COP">COP</option>
                     <option value="CZK">CZK</option>
                     <option value="DKK">DKK</option>
                     <option value="DOP">DOP</option>
                     <option value="EGP">EGP</option>
                     <option value="EUR">EUR</option>
                     <option value="FJD">FJD</option>
                     <option value="GBP">GBP</option>
                     <option value="GTQ">GTQ</option>
                     <option value="HKD">HKD</option>
                     <option value="HRK">HRK</option>
                     <option value="HUF">HUF</option>
                     <option value="IDR">IDR</option>
                     <option value="ILS">ILS</option>
                     <option value="INR">INR</option>
                     <option value="ISK">ISK</option>
                     <option value="JPY">JPY</option>
                     <option value="KRW">KRW</option>
                     <option value="KZT">KZT</option>
                     <option value="MXN">MXN</option>
                     <option value="MYR">MYR</option>
                     <option value="NOK">NOK</option>
                     <option value="NZD">NZD</option>
                     <option value="PAB">PAB</option>
                     <option value="PEN">PEN</option>
                     <option value="PHP">PHP</option>
                     <option value="PKR">PKR</option>
                     <option value="PLN">PLN</option>
                     <option value="PYG">PYG</option>
                     <option value="RON">RON</option>
                     <option value="RUB">RUB</option>
                     <option value="SAR">SAR</option>
                     <option value="SEK">SEK</option>
                     <option value="SGD">SGD</option>
                     <option value="THB">THB</option>
                     <option value="TRY">TRY</option>
                     <option value="TWD">TWD</option>
                     <option value="UAH">UAH</option>
                     <option value="USD">USD</option>
                    <option value="UYU">UYU</option>
                    <option value="VND">VND</option>
                    <option value="ZAR">ZAR</option>          
              </select>
              </div><br></br>

              <div>
                  <input type= "number" id ="amount-one" placeholder="0" value = {this.state.numOne} onChange={this.handleNum1Change} />
              </div>        
            </div>


                <div className ="rate-container">
                    <p className="rate" id = "rate"> {this.state.rate}</p>
                </div>

            
            <div className="currency-two">
                <div>
                     <select id= "currency-one" value ={this.state.valueTwo} onChange = {this.handleChange2}>
                       <option value="AED">AED</option>
                       <option value="ARS">ARS</option>
                       <option value="AUD">AUD</option>
                       <option value="BGN">BGN</option>
                       <option value="BRL">BRL</option>
                       <option value="BSD">BSD</option>
                       <option value="CAD">CAD</option>
                       <option value="CHF">CHF</option>
                       <option value="CLP">CLP</option>
                       <option value="CNY">CNY</option>
                       <option value="COP">COP</option>
                       <option value="CZK">CZK</option>
                       <option value="DKK">DKK</option>
                       <option value="DOP">DOP</option>
                       <option value="EGP">EGP</option>
                       <option value="EUR">EUR</option>
                       <option value="FJD">FJD</option>
                       <option value="GBP">GBP</option>
                       <option value="GTQ">GTQ</option>
                       <option value="HKD">HKD</option>
                       <option value="HRK">HRK</option>
                       <option value="HUF">HUF</option>
                       <option value="IDR">IDR</option>
                       <option value="ILS">ILS</option>
                       <option value="INR">INR</option>
                       <option value="ISK">ISK</option>
                       <option value="JPY">JPY</option>
                       <option value="KRW">KRW</option>
                       <option value="KZT">KZT</option>
                       <option value="MXN">MXN</option>
                       <option value="MYR">MYR</option>
                       <option value="NOK">NOK</option>
                       <option value="NZD">NZD</option>
                       <option value="PAB">PAB</option>
                       <option value="PEN">PEN</option>
                       <option value="PHP">PHP</option>
                       <option value="PKR">PKR</option>
                       <option value="PLN">PLN</option>
                       <option value="PYG">PYG</option>
                       <option value="RON">RON</option>
                       <option value="RUB">RUB</option>
                       <option value="SAR">SAR</option>
                       <option value="SEK">SEK</option>
                       <option value="SGD">SGD</option>
                       <option value="THB">THB</option>
                       <option value="TRY">TRY</option>
                       <option value="TWD">TWD</option>
                       <option value="UAH">UAH</option>
                       <option value="USD">USD</option>
                       <option value="UYU">UYU</option>
                       <option value="VND">VND</option>
                       <option value="ZAR">ZAR</option>                  
                </select>
              </div>
            <div>
                <p className= "final">{this.state.numTwo}</p>
            </div>      
            </div>
            <input type="submit" value="Submit" id="submit"/>
        </form>
            </div>
        )
    }
}

export default Select
