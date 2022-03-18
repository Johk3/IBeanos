import React, {Component} from "react"
import "../App.css";
import PageRenderer from "./pdf/page-renderer"
import HLP1 from "../papers/Chemistry_paper_1__TZ1_HL.pdf"
import AllPages from "./pdf/page-renderer";
import Timer from "./timer"


export default class ChemistryHL extends Component {
    constructor() {
        super();
    }

    render(){
        // Render the paper and timer
        return(
            <div className="App">
                <header className="App-header">
                    <Timer/>
                    <PageRenderer pdf={HLP1}/>
                </header>
            </div>
        )
    }
}