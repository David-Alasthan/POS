import React from 'react';
import './FirstProducts.css';

const FirstProducts = (props) => {
  return (
    
					<div className="product_table_row">
						<div className="product_table_list">
							<div className="card">
								<div className="row center">
									<div className="col-2 p-0">
										<div className="product_name">Apple</div>
									</div>
									<div className="col-1 p-0">
										<form action="">
											<div className="control">
												<button type="button" className="bttn bttn-left" id="minus">
													<span>-</span>
												</button>
												<input
													type="number"
													className="input"
													id="input"
													value="1"
												/>
												<button type="button" className="bttn bttn-right" id="plus">
													<span>+</span>
												</button>
											</div>
										</form>
									</div>
									<div className="col-1 p-0">
										<div className="product_price">1000 MMK</div>
									</div>
									<div className="col-1 p-0">
										<button className="del">x</button>
									</div>
								</div>
							</div>
						</div>
						<div className="total_table">
							<table className="table">
								<tbody>
									<tr>
										<th>Sub Total</th>
										<td>100000 MMK</td>
									</tr>
									<tr>
										<th>Advance Payment</th>
										<td>
											<div>
												<input
													type="text"
													className="customer_table_payment_input"
												/>
											</div>
										</td>
									</tr>
									<tr>
										<th>Total</th>
										<td>100000 MMK</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

  )
}

export default FirstProducts