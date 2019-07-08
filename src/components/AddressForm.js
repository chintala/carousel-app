import React from 'react';
import PropTypes from 'prop-types';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  updateAddress(event) {
    const address = this.state.location;
    if (address) {
      this.props.updateAddress(address);
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  render() {
    return (
      <form className="location-form" onSubmit={this.updateAddress}>
        <input
          type="text"
          placeholder="Example: Seattle, WA"
          onChange={this.handleChange}
        />
        <button type="submit" value="submit">
          Get Photos
        </button>
      </form>
    );
  }
}

AddressForm.propTypes = {
  updateAddress: PropTypes.func
};

export default AddressForm;
