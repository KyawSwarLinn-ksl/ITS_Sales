import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
              This Is Home Page!!!!!!!!!!!
            </div>
        );
    }
}
export default Home;
ReactDOM.render(<Home />, document.getElementById("app"));
