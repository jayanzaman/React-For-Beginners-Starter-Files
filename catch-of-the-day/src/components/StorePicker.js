import React from 'react';
import { getFunName} from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.gotToStore = this.gotToStore.bind(this);
  // }
  gotToStore(event) {
    event.preventDefault();
    console.log('You have changed the URL');
    //first grab the text from the box

    //second we're going to transition from / to /store/:storeId
  }
    render() {
        return (

          <form classname = "store-selector" onSubmit={this.gotToStore.bind(this)}>
            {/* Hello */}
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
            <button type="submit">Visit Store </button>
          </form>
        )
    }
}

export default StorePicker;
