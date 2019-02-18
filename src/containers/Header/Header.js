
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { showSideBar } from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        request_col: state.galleryStatus.request_col
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleShowSideBar: () => {
            dispatch(showSideBar())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
