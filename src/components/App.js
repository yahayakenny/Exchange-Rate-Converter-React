import React, { Component } from 'react'
import Select from "./Select"
import "./App.css"

export class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 class = "exchange">Exchange rate Converter </h1>
                <Select/>      
            </div>
        )
    }
}

export default App
