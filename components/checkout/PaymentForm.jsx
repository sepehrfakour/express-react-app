const React = require('react');

const CheckoutActions = require('../../actions/CheckoutActions.js');

const PaymentForm = React.createClass({
  getInitialState: function () {
    return {};
  },
  componentWillMount: function () {
    window.addEventListener('keydown', this._keyPressHandler)
  },
  componentWillUnmount: function () {
    window.removeEventListener('keydown', this._keyPressHandler)
  },
  render: function () {
    let payment = this.props.payment;
    return(
      <form id="payment-form" onSubmit={this._submitCallback} className="container">
        <p className="row">
          <span className="col-xs-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
            <label>Card number</label>
            <input type="text" name="card" placeholder="Card" defaultValue={payment.card}/>
          </span>
        </p>
        <p className="row">
          <span className="col-xs-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
            <label>Expiration date</label>
            <input type="text" name="expiry" placeholder="Expiry" defaultValue={payment.expiry}/>
          </span>
        </p>
        <p className="row">
          <span className="col-xs-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
            <label>CVC</label>
            <input type="text" name="cvc" placeholder="CVC" defaultValue={payment.cvc}/>
          </span>
        </p>
        <p className="row">
          <span className="col-xs-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
            <input type="submit" name="checkout-form-submit" value="Continue to confirmation" onClick={this._submitCallback} />
          </span>
        </p>
      </form>
    );
  },
  _keyPressHandler: function (event) {
    if ((event.which && event.which == 13) || (event.keyCode && event.keyCode == 13)) {
      // Handle enter key
      event.stopPropagation();
      this._submitCallback(event);
    }
  },
  _submitCallback: function (event) {
    event.preventDefault();
    let form          = document.body.querySelector('#payment-form'),
        formValidated = false,
        data          = {
          card: form.card.value,
          expiry: form.expiry.value,
          cvc: form.cvc.value
        };
    if (this._validateForm(data)) {
      CheckoutActions.setPayment(data);
      this.props.submitCallback();
    }
  },
  _validateForm: function (data) {
    // TODO: validate this form!
    return true;
  }
})

export default PaymentForm;
