import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import commonActionCreators from "../Redux/commonActionCreators";

export const useActionsDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(commonActionCreators, dispatch)
}
