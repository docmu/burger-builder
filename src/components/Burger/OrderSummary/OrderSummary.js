import React, { Fragment, Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;