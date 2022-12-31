import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, rootReducerType} from "../Redux/redux-store";

export const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;