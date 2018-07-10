import React from 'react'
class PayTypeSelector extends React.Component {
render() {
return (

<div className="field">
	<label htmlFor="order_pay_type">Pay type</label>
	<select onChange={this.onPayTypeSelected} id="pay_type" name="order[pay_type]">
		<option value="">Select a payment method</option>
		<option value="Check">Check</option>
		<option value="Credit card">Credit card</option>
		<option value="Purchase order">Purchase order</option>
	</select>
</div>
);
}

onPayTypeSelected(event) {
 this.setState({ selectedPayType: event.target.value });
 }
}
export default PayTypeSelector