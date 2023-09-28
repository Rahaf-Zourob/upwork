import axios from "axios";
import { useReducer } from "react";

import { ROLES } from "../constants/role";
import { AUTH_ACTIONS, AUTH_API_PATHS } from "../constants/auth";
import { ApiUrl } from "../config/baseApi";
import { PATH } from "@/router/path";
import { useRouter } from "next/navigation";

const initialState = {
  role: (typeof window !== 'undefined') ? localStorage.getItem('role') : ROLES.GUEST,
  error: null,
  id: (typeof window !== 'undefined') ? localStorage.getItem('id') :'',
  error: null,
  isLoading: false,
};

const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_ACTIONS.AUTHORIZE:
      const role = ROLES.USER;
      const email = action?.payload?.email;
      localStorage.setItem('role', role);
      localStorage.setItem('id', JSON.stringify(action?.payload?.id));     

      return {
        ...state,
        role: role,
        error: null,
        isLoading: false,
      };

    case AUTH_ACTIONS.LOGOUT:
      ['id','role','recentSearche'].forEach((item) =>
        localStorage.removeItem(item)
      );

      return {
        email: null,
        role: ROLES.GUEST,
        error: null,
        isLoading: false,
      };

    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
const useAuth = () => {
  const router = useRouter()
  const [state, dispatch] = useReducer(reduce, initialState);
  const login = async (body) => {
    try {
        const { data } = await axios.get(ApiUrl + AUTH_API_PATHS.LOGIN, body);
        const info = data.find((item) => item.email === body.email);
        if (info && info.email) {
            dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: info });
            router.push(PATH.HOME);
        } else {
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: "You don't have an account" });
        }
    } catch (error) {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING });
        dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
};


  const signup = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(ApiUrl + AUTH_API_PATHS.SIGNUP, body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
    router.push(PATH.LOGIN)
  };


  return {
    ...state,
    login,
    signup,
    logout,
  };
};

export default useAuth;