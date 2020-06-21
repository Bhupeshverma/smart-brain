


export  function AuthReducer(state, action) {
    console.log(action);
    
    switch (action.type) {
        case"authenticated":
            return {...state, isAuthenticated: true}
        case "login_success":
          return { ...state, user: action.payload, isAuthenticated: true };
        case 'login_failure':
          return {
            ...state,
            user: null,
            isAuthenticated: false
          };
        case "setLoading": {
          return { ...state, isloading: action.value };
        }
        default:
          throw new Error();
      }
}
