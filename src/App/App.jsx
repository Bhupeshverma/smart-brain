import React, {useReducer, useContext, useEffect} from 'react';
import Nav from '../Components/Nav';
import AppProvider from '../Context/AppProvider';
import { ApplicationRoutes } from '../Utils/ApplicationRoutes';
import AuthProvider, { AuthContext } from '../Context/AuthProvider';


const App = () => {

    return (
			<AppProvider>
				<AuthProvider>
					<Nav/>
					<ApplicationRoutes />
				</AuthProvider>
			</AppProvider>
    )
}

export default App