import React, { useState, useEffect, useContext } from "react";

function Coupons() {
  // get data from localsotrage  localStorage.setItem("coupons", JSON.stringify(data.result));
  // display all the data in a table

  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const coupons = JSON.parse(localStorage.getItem("coupons"));
    console.log("coupons", coupons);
    setCoupons(coupons);
  }, []);

  return (
    <div>
      <h1>Coupons</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Coupon Code</th>
            <th scope="col">Discount</th>
            <th scope="col">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon.couponCode}>
              <td>{coupon.couponCode}</td>
              <td>{coupon.discountAmount}</td>
              <td>{coupon.minAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Coupons;
