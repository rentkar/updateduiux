import React, { Component, useState, useContext, useEffect } from "react";
import { Table} from 'react-bootstrap'
import 'react-google-flight-datepicker/dist/main.css';
import { RangeDatePicker } from 'react-google-flight-datepicker'
import { fetchProducts, fetchUsers, fetchSupport, fetchOrderReq, fetchLenderReq} from '../../config'
import axios from "axios"
export function Dash ()
{
  return (
    <div className='dash'>
      <h4>FILTER BY DATE</h4>
      <RangeDatePicker
							minDate={new Date(1900, 0, 1)}
							maxDate={new Date(2220, 0, 1)}
							dateFormat="D-MM-YYYY"
							startDatePlaceholder="From"
							endDatePlaceholder="To"
							disabled={false}
							className="datepicker col-4"
							startWeekDay="monday"
							/>
    
      <div className='payments'>
        <p>PAYMENTS</p> 
      <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>User ID</th>
            <th>UserName</th>
            <th>Order ID</th>
            <th>Order Sub ID</th>
            <th>Amount Pending</th>
            <th>Product</th>
            <th>Status</th>
            <th>Location</th>
          </thead>
          <tbody>
            <tr>
              <td>9045XXXXXX</td>
              <td>Tanuj</td>
              <td>#5000</td>
              <td>#5000a</td>
              <td>4000</td>
              <td>PS4P9</td>
              <td>Pending</td>
              <td>Andheri</td>
            </tr>
          </tbody>
        </Table >
      </div>
      </div>
      <div className='pickups'>
        <p>PICKUPS</p> 
        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>User ID</th>
            <th>UserName</th>
            <th>Order ID</th>
            <th>Order Sub ID</th>
            <th>Amount Pending</th>
            <th>Product</th>
            <th>Status</th>
            <th>Location</th>
          </thead>
          <tbody>
            <tr>
              <td>9045XXXXXX</td>
              <td>Tanuj</td>
              <td>#5000</td>
              <td>#5000a</td>
              <td>4000</td>
              <td>PS4P9</td>
              <td>Pending</td>
              <td>Andheri</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>
      <div className='deliveries'>
        <p>DELIVERIES</p> 
        <div className='table'>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <th>User ID</th>
            <th>UserName</th>
            <th>Order ID</th>
            <th>Order Sub ID</th>
            <th>Amount Pending</th>
            <th>Product</th>
            <th>Status</th>
            <th>Location</th>
          </thead>
          <tbody>
            <tr>
              <td>9045XXXXXX</td>
              <td>Tanuj</td>
              <td>#5000</td>
              <td>#5000a</td>
              <td>4000</td>
              <td>PS4P9</td>
              <td>Pending</td>
              <td>Andheri</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>
    </div>
  )
}