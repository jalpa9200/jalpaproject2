import React from 'react';

const Display = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((items) => {
                return(
                    <tr key={items._id}>
                        <td>{items.id}</td>
                        <td>{items.p_no[0].product_name}</td>
                    {/* hm ? : use karke condition laaga sakte hae agar product name nahi hae toh ye imp hae ise if condition ki tarah use kar skte hae */}
                        {/* {items.p_no != '' ? <td>
                            {items.p_no[0].product_name}
                            {console.log(items.p_no[0].product_name)}
                           </td> :
                           <td>No Products</td>
                */}
                        <td>{items.name}</td>
                        <td>{items.phone}</td>
                        <td>{items.email}</td>
                        <td>Rs. {items.cost}</td>
                        <td>{items.date}</td>
                        <td>{items.status}</td>
                        <td>{items.bank_name}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Pname</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default Display;