function login(state = [], action=[]) { // 登录

    console.log(action);
    switch (action.type) {
        case 'USER_LOGIN':
            console.log(Object.assign({}, state, {
                username:action.loginData.username,
                password: action.loginData.password ,
                loginStatus : action.loginData.loginStatus
            }));
            return Object.assign({}, state, {
                username:action.loginData.username,
                password: action.loginData.password ,
                loginStatus : action.loginData.loginStatus
            })

        default:
            return state
    }
}

const loginState = {
    login
};

export default loginState