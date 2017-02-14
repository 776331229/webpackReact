/**
 * Created by zc on 2017/2/13.
 */
import * as types from './actionType.js'

export function login(data) { // 登录
    // console.log(data.username,data.password,data.loginStatus);
    // return (dispatch) => {
    //     return dispatch({type: types.USER_LOGIN, loginData : data});
    // }
    return {
        type: types.USER_LOGIN,
        loginData : data
    }
}