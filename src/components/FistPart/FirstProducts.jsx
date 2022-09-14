import React from 'react'

const FirstProducts = () => {
  return (
    
					<div class="product_table_row">
						<div class="product_table_list">
							<div class="card">
								<div class="row center">
									<div class="col-2 p-0">
										<div class="product_name">Apple</div>
									</div>
									<div class="col-1 p-0">
										<form action="">
											<div class="control">
												<button type="button" class="bttn bttn-left" id="minus">
													<span>-</span>
												</button>
												<input
													type="number"
													class="input"
													id="input"
													value="1"
												/>
												<button type="button" class="bttn bttn-right" id="plus">
													<span>+</span>
												</button>
											</div>
										</form>
									</div>
									<div class="col-1 p-0">
										<div class="product_price">1000 MMK</div>
									</div>
									<div class="col-1 p-0">
										<button class="del">x</button>
									</div>
								</div>
							</div>
						</div>
						<div class="total_table">
							<table class="table">
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
													class="customer_table_payment_input"
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