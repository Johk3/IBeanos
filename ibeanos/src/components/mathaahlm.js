import React, {Component} from "react"
import "../App.css";
import PageRenderer from "./pdf/page-renderer"
import HLP1 from "../papers/Mathematics_analysis_and_approaches_paper_1__TZ1_HL_markscheme.pdf"
import AllPages from "./pdf/page-renderer";
import Timer from "./timer"


export default class MathAAHLM extends Component {
    constructor() {
        super();
    }

    render(){
        // Render the paper and timer
        return(
            <div className="App">
                <header className="App-header">
                    <PageRenderer pdf={HLP1}/>  
                </header>
            </div>
        )
    }
}