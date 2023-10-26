import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./componets/dashboard";
import React, {useEffect, useState, Suspense} from "react";
import {createContext} from "react";



function App() {
  const [route, setRoute] = useState()
  const [routeData, setRouteData] = useState()
    useEffect(() => {
        fetch('./data/tabs.json').then(res => res.json()).then(json => {
            setRoute(json)
            setRouteData(json.data.find(el => el.order === 0));
        }).catch(err => {
            console.log(err)
        })
    }, []);
  const StoreContext = createContext(route)
  if(route === undefined){
      return <div><h2>Loading...</h2></div>
  }else {
      const routeComponents = route.data.map((el) => {
          const LazyLoading = React.lazy(() => import(`./${el.path}`))
          return(
              <Route index key={el.id} path={el.id} element={
                  <Suspense fallback={"Loading..."}>
                      <LazyLoading/>
                  </Suspense>
                }
              />
          )
      })
      return (
          <StoreContext.Provider value={route}>
              <Routes>
                  <Route path='/' element={<Dashboard/>}>
                      <Route index element={<Navigate to={routeData.id} replace/>}/>
                      {routeComponents}
                  </Route>
              </Routes>
          </StoreContext.Provider>
      );
  }
}

export default App;
