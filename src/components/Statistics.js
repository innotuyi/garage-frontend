import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaBeer } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";

const Statistics = () => {
  const [messages, setMessage] = useState([]);

  const [count, setPropertyCount] = useState();

  const [messagesCount, setMessagecount] = useState();

  const [forsale, setForSale] = useState();

  const [forRent, setforRent] = useState();

  useEffect(() => {
    async function propertyCount() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/property/statistics"
        );

        if (data) {
          setPropertyCount(data[0].total);

          console.log("count", count);
        }
      } catch (error) {
        console.log(error);
      }
    }
    propertyCount();
  }, []);

  useEffect(() => {
    async function getforsale() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/property/statistics"
        );

        if (data) {
          setForSale(data[0].total);

          console.log("ForSalae", forsale);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getforsale();
  }, []);

  useEffect(() => {
    async function getforrent() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/forsale/statistics"
        );

        if (data) {
          setforRent(data[0].total);

          console.log("forrent", forRent);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getforrent();
  }, []);

  useEffect(() => {
    async function getAllMessageCount() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/message/statistics"
        );

        if (data) {
          setMessagecount(data[0].total);

          console.log("Messagecount", messagesCount);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllMessageCount();
  }, []);

  useEffect(() => {
    async function getAllMessage() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get-request"
        );

        if (response) {
          setMessage(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllMessage();
  }, []);
  return (
    <>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-3">
            <div class="card bg-info text-white">
              <div class="card-body">
                <h5 class="card-title">Student</h5>
                <p class="card-text">5</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card bg-success text-white">
              <div class="card-body">
                <h5 class="card-title">Courses</h5>
                <p class="card-text">3</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card bg-primary text-white">
              <div class="card-body">
                <h5 class="card-title">Enrolled</h5>
                <p class="card-text">4</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card bg-warning text-white">
              <div class="card-body">
                <h5 class="card-title">Failed Transaction</h5>
                <p class="card-text">3</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-2">
            <div class="card bg-primary text-white">
              <div class="card-body">
                <h5 class="card-title">Payments</h5>
                <p class="card-text">4</p>
              </div>
            </div>
          </div>

    
            
        </div>
      </div>
    </>
  );
};

export default Statistics;
