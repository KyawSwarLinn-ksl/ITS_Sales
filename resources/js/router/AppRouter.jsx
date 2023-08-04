import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../pages/General/SideBar";
import PasswordUpdateForm from "../pages/General/PasswordUpdate";
import Header from "../pages/General/Header";
import Home from "../pages/General/Home";
import LoginForm from "../pages/General/LoginComponent";
import ShortTestRegister from "../pages/Education/ShortTestRegister";
import ShortTestList from "../pages/Education/ShortTestList";
import EmployeeList from "../pages/General/EmployeeList";
import EmployeeRegister from "../pages/General/EmployeeRegister";
import CommitteeComponent from "../pages/Master/Committees";
import AssemblyTypes from "../pages/Master/AssemblyTypes";
import EventTypeComponent from "../pages/Master/EventTypes";
import Category from "../pages/Master/Categories";
import DeviceTypes from "../pages/Master/DeviceTypes";
import Tag from "../pages/Master/Tags";
import Isp from "../pages/Master/Isp";
import BirthdayPartyRegister from "../pages/Recreation/BirthdayPartyRegister";
import BirthdayPartyList from "../pages/Recreation/BirthdayPartyList";
import EventRegister from "../pages/General/EventRegister";
import EventList from "../pages/General/EventList";
import Batches from "../pages/Master/Batches";
import JpStudyList from "../pages/Education/JpStudyList";
import JpStudyRegister from "../pages/Education/JpStudyRegister";
import EventRegisterV2 from "../pages/General/EventRegisterV2";
import EventRegisterV3 from "../pages/General/EventRegisterV3";
class AppRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Sidebar />
                    <Header />

                    <Switch>
                        <Route exact path={"/"} component={LoginForm} />
                        <Route exact path={"/home"} component={Home} />

                        {/* 社員一覧画面 作成者：TMK */}
                        <Route
                            exact
                            path={"/employeeList"}
                            component={EmployeeList}
                        />

                        {/* 社員登録画面 作成者：TMK */}
                        <Route
                            exact
                            path={"/employeeRegister"}
                            component={EmployeeRegister}
                        />

                        {/* 委員会画面 作成者：TMK */}
                        <Route
                            exact
                            path={"/committees"}
                            component={CommitteeComponent}
                        />

                        {/* 期生画面　作成者：SDH */}
                        <Route exact path={"/batches"} component={Batches} />

                        {/* 日本語の勉強一覧画面　作成者：SDH */}
                        <Route
                            exact
                            path={"/jpStudyRegister"}
                            component={JpStudyRegister}
                        />

                        {/* 日本語の勉強登録画面　作成者：SDH */}
                        <Route
                            exact
                            path={"/jpStudyList"}
                            component={JpStudyList}
                        />

                        {/* 小テスト一覧画面 作成者：EMT */}
                        <Route
                            exact
                            path={"/birthdayPartyList"}
                            component={BirthdayPartyList}
                        />

                        {/* 小テスト一覧画面 作成者：EMT */}
                        <Route
                            exact
                            path={"/shortTestRegister"}
                            component={ShortTestRegister}
                        />

                        {/* 小テスト一覧画面 作成者：EMT */}
                        <Route
                            exact
                            path={"/shortTestList"}
                            component={ShortTestList}
                        />

                        {/* ネットワーク画面 作成者：KSL */}
                        <Route exact path={"/isp"} component={Isp} />

                        {/* 誕生日会登録画面 作成者：ZMT, 指摘対応担当者：KSL */}
                        <Route
                            exact
                            path={"/birthdayPartyRegister"}
                            component={BirthdayPartyRegister}
                        />

                        {/* 朝礼タイプ画面 作成者：HSSH */}
                        <Route
                            exact
                            path={"/assemblytypes"}
                            component={AssemblyTypes}
                        />

                        {/* イベントタイプ画面 作成者：SMA */}
                        <Route
                            exact
                            path={"/eventtype"}
                            component={EventTypeComponent}
                        />

                        {/* カテゴリー画面 作成者：CTA */}
                        <Route
                            exact
                            path={"/categories"}
                            component={Category}
                        />

                        {/* デバイスタイプ画面 作成者：EEPP */}
                        <Route
                            exact
                            path={"/devicetypes"}
                            component={DeviceTypes}
                        />

                        {/* タグ画面 作成者：THT */}
                        <Route exact path={"/tags"} component={Tag} />

                        {/* パスワード更新画面 作成者：KMT */}
                        <Route
                            path={"/passwordupdate"}
                            component={PasswordUpdateForm}
                        />

                        {/* イベント一覧画面 作成者：ZMT */}
                        <Route
                            exact
                            path={"/eventList"}
                            component={EventList}
                        />

                        {/* イベント登録画面 作成者：ZMT */}
                        <Route
                            exact
                            path={"/eventRegister"}
                            component={EventRegister}
                        />

                        {/* イベント登録画面 作成者：SMA */}
                        <Route
                            exact
                            path={"/eventRegisterV2"}
                            component={EventRegisterV2}
                        />

                        {/* イベント登録画面 作成者：EEPP */}
                        <Route
                            exact
                            path={"/eventRegisterV3"}
                            component={EventRegisterV3}
                        />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default AppRouter;
ReactDOM.render(<AppRouter />, document.getElementById("app"));
