import React, {useReducer, useContext} from 'react';


import Nav from '../Components/Nav';
import AppProvider from '../Context/AppProvider';
import { ApplicationRoutes } from '../Utils/ApplicationRoutes';


const App = () => {
	
    return (
			<AppProvider>
				<Nav/>
				<ApplicationRoutes />
			</AppProvider>
    )
}

export default App