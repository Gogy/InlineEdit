const React = require('react');

module.exports = React.createClass({
    displayName: 'InlineEdit',

    propTypes: {
        /**
         * Text value for inline editing
         */
        text: React.PropTypes.string,
        /**
         * Callback function triggered once the text has been updated
         */
        updateCB: React.PropTypes.func,
        /**
         * Callback function when you cancel editing text (for example by pressing esc button)
         */
        cancelEditCB: React.PropTypes.func,
        /**
         * If you want to activate edit mode from outside of this component (not by default action of double clicking)
         */
        editModeActive: React.PropTypes.bool,
    },

    getInitialState() {
        return {
            itemText: this.props.text,
            inputValue: this.props.text,
            editMode: false,
        };
    },

    componentWillReceiveProps(newProps) {
        if (this.props == newProps)) {
            this.setState({
                editMode: newProps.editModeActive,
                itemText: newProps.text,
                inputValue: newProps.text
            });
        }
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
        }, () => {
            this.props.cancelEditCB();
        });
    },

    _showItem() {
        return this.state.itemText;
    },

    _showEdit() {
        return (
            <input
                value={this.state.inputValue}
                onChange={this._onInputChange}
                onBlur={this._cancelEdit}
                onKeyDown={this._handleKeyPress}
                className={this.props.className}
                autoFocus
                onFocus={function(e) {
                    // Sets cursor to the end of the text
                    const inputValue = e.target.value;
                    e.target.value = '';
                    e.target.value = inputValue;
                }}
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
            this._cancelEdit();
        }
    },

    _saveOnEnter() {
        this.setState({
            itemText: this.state.inputValue,
            editMode: false
        }, () => {
            this.props.updateCB(this.state.inputValue);
        });
    }
});
