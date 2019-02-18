import Container from "../../components/Container/Container";
import { hiddenSideBar } from './../../actions/index';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        focus: state.sidebarStatus.focus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleHiddenSide: () => {
            dispatch(hiddenSideBar());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

