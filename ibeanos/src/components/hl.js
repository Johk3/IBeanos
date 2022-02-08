import React, {Component} from "react"
import "../App.css";
import PageRenderer from "./pdf/page-renderer"
import HLP1 from "../papers/Physics_paper_1_HL.pdf"
import AllPages from "./pdf/page-renderer";

export default class Hl extends Component {
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