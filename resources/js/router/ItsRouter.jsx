import React from "react";
import ReactDOM from "react-dom";
import ITSNavbar from "../components/common/ITSNavbar";
import { BrowserRouter} from 'react-router-dom';
import { Switch, Route} from "react-router-dom";
import Home from "../components/common/home";
import EngineerList from "../components/engineer/EngineerList";
import InsertEngineer from "../components/engineer/InsertEngineer";
import SearchEngineer from "../components/engineer/SearchEngineer";
import EngineerSearchResult from "../components/engineer/EngineerSearchResult";
import OrderList from "../components/order/OrderList";
import InsertOrder from "../components/order/InsertOrder";
import SearchOrderDetail from "../components/order/SearchOrderDetail";
import OrderDetailSearchResult from "../components/order/OrderDetailSearchResult";
import Sales from "../components/offshore/Sales";
import InsertProgressStatus from "../components/offshore/InsertProgressStatus";

class ItsRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                 <BrowserRouter>
                    <div>
                        <ITSNavbar/>
                        <Switch>
                            <Route exact path={"/"} component={Home} />
                            <Route exact path={"/home"} component={Home} />
                            <Route exact path={"/engineerList"} component={EngineerList} />
                            <Route exact path={"/insertEngineer"} component={InsertEngineer} />
                            <Route exact path={"/searchEngineer"} component={SearchEngineer} />
                            <Route exact path={"/engineerSearchResult"} component={EngineerSearchResult} />

                            <Route exact path={"/orderList"} component={OrderList} />
                            <Route exact path={"/insertOrder"} component={InsertOrder} />
                            <Route exact path={"/searchOrder"} component={SearchOrderDetail} />
                            <Route exact path={"/orderSearchResult"} component={OrderDetailSearchResult} />

                            <Route exact path={"/sales"} component={Sales} />
                            <Route exact path={"/insertProgressStatus"} component={InsertProgressStatus} />
                        </Switch>
                    </div>
               </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default ItsRouter;
ReactDOM.render(<ItsRouter />, document.getElementById("app"));
