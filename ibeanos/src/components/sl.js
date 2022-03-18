import React, {Component} from "react"
import "../App.css";
import SLP1 from "../papers/Physics_paper_1_SL.pdf"
import AllPages from "./pdf/page-renderer";
import Timer from "./timer"


export default class Sl extends Component {
    constructor() {
        super();
    }

    render(){
        // Render the paper and timer
        return(
            <div className="App">
                <header className="App-header">
                    <Timer/>
                    <AllPages pdf={SLP1}/>
                </header>
            </div>        
        )
    }
}