import { connect } from 'react-redux';
import { updateAddress } from '../actions';
import AddressForm from './AddressForm';

function mapDispatchToProps(dispatch) {
  return {
    updateAddress: function(address) {
      dispatch(updateAddress(address));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddressForm);
