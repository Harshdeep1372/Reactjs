import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutusCompo from "./../Component/pages/AboutUs.jsx"
import HomeCompo from "./../Component/pages/HomeCompo.jsx"
import HeaderCompo from './../Component/comman/header.jsx';
import ContactCompo from '../Component/pages/WebsiteIntro.jsx';

// import ContactCompo from './../Component/pages/ContactCompo.jsx';
import ExampleCompo from './../Component/pages/ExampleCompo.jsx';
// import ClassCompoRoute from './../Component/ClassComponent/ClassCompoRoute.jsx';
// import FunctionalCompoRoute from './../Component/FunctionalComponent/FunctionalCompoRoute.jsx';

import React from "react";
// const ClassCompo = React.lazy(() =>)
// const ClassCompo = lazy(() => import('./../Component/ClassComponent/ClassCompoRoute.jsx'))
const ClassCompoRoute = lazy(() => { return import('../Component/ClassComponent/ClassCompoRoute.jsx') })
const FunctionalCompoRoute = lazy(() => { return import('./../Component/FunctionalComponent/FunctionalCompoRoute.jsx') })
const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomeCompo />),
    }, {
        path: "/about",
        element: (<><HeaderCompo /><AboutusCompo /></>),
    },
    {
        path: "/contact",
        element: (<><HeaderCompo /><ContactCompo /></>),
    },
    {
        path: "/examples",
        element: (<><HeaderCompo /><ExampleCompo /></>),
        children: [
            {
                path: "/examples/classcomponent/*",
                element: (<Suspense fallback={<>loading...</>} ><ClassCompoRoute /></Suspense>),
                // element: (<Suspense fallback={<>je type krvu hoi....</>} ><ClassCompo /></Suspense>),
            },
            {
                path: "/examples/FunctionalComponent/*",
                element: (<Suspense fallback={<>loading...</>} ><FunctionalCompoRoute /></Suspense>)
                // element: (<><FunctionalComponent /></>),
            }

        ]
    }
])

export default router;