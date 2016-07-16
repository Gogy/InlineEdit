var React = require('react');

const EditableItem = React.createClass({
    displayName: 'EditableItem',

    propTypes: {
        onItemUpdate: React.PropTypes.func
    },

    getInitialState() {
        return {
            itemText: this.props.text,
            inputValue: this.props.text,
            editMode: false
        };
    },

    render() {
        return (
            <span onDoubleClick={this._makeEditable}>
                {this.state.editMode ? this._showEdit() : this._showItem()}
            </span>
        );
    },

    _makeEditable() {
        this.setState({
            editMode: true
        });
    },

    _cancelEdit() {
        this.setState({
            inputValue: this.state.itemText,
            editMode: false
        })
    },

    _showItem() {
        return this.state.itemText
    },

    _showEdit() {
        return (
            <input
                value={this.state.inputValue}
                onChange={this._onInputChange}
                onBlur={this._cancelEdit}
                onKeyDown={this._handleKeyPress}
                style={{background: 'transparent', border: '0px', outline: 'none', width:'100%', padding: '0px', margin: '0px'}}
                autoFocus
            />
        );
    },

    _onInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    },

    _handleKeyPress(e) {
        if(e.which == 13) {
            this._saveOnEnter();
        } else if(e.which == 27) {
            this._cancelEdit()
        }
    },

    _saveOnEnter() {
        this.setState({
            itemText: this.state.inputValue,
            editMode: false
        });

        try {
            this.props.onItemUpdate(this.state.inputValue);
        } catch(err) {
            console.log('You are not handeling inline updates. You need onItemUpdate prop function')
        }
    }
});

module.exports = EditableItem;
