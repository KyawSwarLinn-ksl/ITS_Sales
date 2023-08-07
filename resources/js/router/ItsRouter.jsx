import React from "react";
import ReactDOM from "react-dom";
import ITSNavbar from "../components/common/ITSNavbar";

class ItsRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
               <ITSNavbar/>
            </React.Fragment>
        );
    }
}
export default ItsRouter;
ReactDOM.render(<ItsRouter />, document.getElementById("app"));
