# EditableItem

React component which enables in-line editing on double click

## Usage 
    const EditableItem = require('your-path/EditableItem.react.js');
    
  Then when you need in-line editable text you simply do following:
  
    <EditableItem>
        text='Your text'
        onInputChange={this.yourHandelingFunction}
    />
    
  When the item is changed, the component will pass a new value to onInputChange and it will be accessable in your function:
  
    yourHandelingFunction(updatedText) {
        console.log(updatedText);
    }
    
