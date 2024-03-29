import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ol>
                        <li><Link to="whatisfunctionalcomponent"> What is Functional Component </Link></li>
                        <li><Link to="stateinfunccomp"> State in Functional Component</Link></li>
                        <li><Link to="propsinfunccomp"> Props In React </Link></li>
                        <li><Link to="jsxinfunccomp"> JSX File</Link></li>
                        <li><Link to="controlledcomponent"> Controlled Component and uncontrolled</Link></li>
                        <li><Link to="controlledcomponentmultipledata"> Multiple Input in single State Component </Link></li>
                        <li><Link to="restandspread"> Rest Vs Spread </Link></li>
                        <li><Link to="hooksinfunctionalcompo"> Hooks </Link></li>
                        <li><Link to="UseStateinfuncomponent"> useState </Link></li>
                        <li><Link to="useeffectinfunctionalcompo"> useEffect </Link></li>
                        <li><Link to="uselayouteffectinfunctionalcompo"> useLayoutEffect </Link></li>
                        <li><Link to="usereffectinfunctionalcompo"> useRef </Link></li>
                        <li><Link to="UseCallbackHooksInFunctionalCompo"> UseCallback</Link></li>
                        <li><Link to="UseMemoHooksInFunctionalCompo"> Use Memo Hook</Link></li>
                        <li><Link to="useimperativeHandleHooksinfunctionalCompo"> Use Imperative Handle</Link></li>
                        <li><Link to="useDebugValueHooksInFunctionalCompo"> Use Debug Value</Link></li>
                        <li><Link to="honeyCompanyTask">Honey Company Task</Link></li>

                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;