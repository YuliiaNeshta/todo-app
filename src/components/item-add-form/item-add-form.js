import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button onClick={()=> this.props.onItemAdded('Hello World')} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">
          Add Item
        </button>
      </div>
    );
  }
}
