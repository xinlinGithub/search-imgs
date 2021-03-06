
import {connect} from "react-redux";
import SideBar from './../../components/SideBar/SideBar';
// import sidebarReducer from './../../stores/reducers/sidebarReducer';
import { getDataSort, hiddenSideBar } from "../../stores/actions/index";

const mapStateToProps = (state) => {
    return {
        focus: state.sidebarStatus.focus,
        dataSort: state.sidebarStatus.data_sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSideData: () => {
            dispatch(getDataSort("sort.json"));
        },
        handleHiddenSidebar: () => {
            dispatch(hiddenSideBar());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);