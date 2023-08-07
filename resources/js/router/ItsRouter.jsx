import React from "react";
import ReactDOM from "react-dom";
import ITSNavbar from "../components/common/ITSNavbar";
import EngineerList from "../components/engineer/EngineerList";
import EngineerInsert from "../components/engineer/engineerInsert";
import EngineerSearch from "../components/engineer/EngineerSearch";
import EngineerSearchResult from "../components/engineer/EngineerSearchResult";
import { BrowserRouter} from 'react-router-dom';
import { Switch, Route} from "react-router-dom";
import Home from "../components/common/home";
class ItsRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                 <BrowserRouter>
                    <div>
                        <ITSNavbar/>
                        <Switch>
                            <Route exact path={"/home"} component={Home} />
                            <Route exact path={"/engineerList"} component={EngineerList} />
                            <Route exact path={"/engineerInsert"} component={EngineerInsert} />
                            <Route exact path={"/engineerSearch"} component={EngineerSearch} />
                            <Route exact path={"/engineerSearchResult"} component={EngineerSearchResult} />
                        </Switch>
                    </div>
               </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default ItsRouter;
ReactDOM.render(<ItsRouter />, document.getElementById("app"));
