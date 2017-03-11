# EditableItem

React component which enables in-line editing on double click.

* Double click on text will enable edit mode
* Esc key on keyboard will exit the edit mode and cancel changes
* Event onBlur will also exit the edit mode and cancel changes
* Enter key will save the changes

## Usage 
```javascript
const EditableItem = require('your-path/EditableItem.react');
```   
  Then when you need in-line editable text you simply do following:

```javascript
<EditableItem
    text='Your text'
    onInputChange={this.yourHandelingFunction}
/>
```
  When the item is changed, the component will pass a new value to `onInputChange` and it will be accessable in your function:
```javascript
yourHandelingFunction(updatedText) {
    console.log(updatedText);
}
```
    
## Demo

![alt text](http://i.imgur.com/tg0dD6r.gif")
