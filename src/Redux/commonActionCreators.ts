import * as UserActionCreators from "./userReducer";
import * as TodoActionCreators from "./todoReducer";

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}
