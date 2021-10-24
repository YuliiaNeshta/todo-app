import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {

	state = {
		label:'',
	}

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label)
		this.setState({label: ''})
	};

  render() {
    return (
      <form className="item-add-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex" onSubmit={this.onSubmit}>
        <input placeholder="what need to be done" className="form-control mr-3" value={this.state.label} onChange={this.onLabelChange} type="text" />
        <button
          
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4"
        >
          Add Item
        </button>
      </form>
    );
  }
}
