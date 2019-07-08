import React from 'react';
import AddressFormContainer from './AddressFormContainer';
import CarouselContainer from './CarouselContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <div className="app-wrap">
          <div className="app-header"></div>
          <div className="app-content">
            <AddressFormContainer />
            <CarouselContainer />
          </div>
          <div className="app-footer"></div>
        </div>
      </div>
    );
  }
}

export default App;
