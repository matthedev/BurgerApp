import React, { Component } from "react";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import axios from "../../../../axios-orders";
import Button from "../../../../components/UI/Modal/Button/Button";
import "./ContactData.css";
import Input from "../../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "mchamela",
        lastName: "bulkiBrinjiKvercxiShvili",
        address: {
          country: "Georgia",
          zipCode: "123456789",
          street: "sakemataFitnees",
        },
        eMail: "test@test.com",
      },
      deliveryMethod: "ori ri wutshi",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
    event.preventDefault();
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postalCode"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading === true) {
      form = <Spinner />;
    }
    return (
      <div className="contactData">
        <h4>Fill Your Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
