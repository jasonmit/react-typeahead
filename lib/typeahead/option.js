/**
 * @jsx React.DOM
 */

var React = window.React || require('react/addons');

/**
 * A single option within the TypeaheadSelector
 */
var TypeaheadOption = React.createClass({displayName: "TypeaheadOption",
  propTypes: {
    customClasses: React.PropTypes.object,
    customValue: React.PropTypes.string,
    onClick: React.PropTypes.func,
    children: React.PropTypes.string,
    hover: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      customClasses: {},
      onClick: function(event) {
        event.preventDefault();
      }
    };
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    var classes = {};
    classes[this.props.customClasses.hover || "hover"] = !!this.props.hover;
    classes[this.props.customClasses.listItem] = !!this.props.customClasses.listItem;

    if (this.props.customValue) {
      classes[this.props.customClasses.customAdd] = !!this.props.customClasses.customAdd;
    }

    var classList = React.addons.classSet(classes);

    return (
      React.createElement("li", {className: classList, onClick: this._onClick}, 
        React.createElement("a", {href: "javascript: void 0;", className: this._getClasses(), ref: "anchor"}, 
           this.props.children
        )
      )
    );
  },

  _getClasses: function() {
    var classes = {
      "typeahead-option": true,
    };
    classes[this.props.customClasses.listAnchor] = !!this.props.customClasses.listAnchor;

    return React.addons.classSet(classes);
  },

  _onClick: function(event) {
    event.preventDefault();
    return this.props.onClick(event);
  }
});


module.exports = TypeaheadOption;
