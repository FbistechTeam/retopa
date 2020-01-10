import React from "react"
import Green from "../../../assets/green.svg"
import Red from "../../../assets/red.svg"

export const History = [
  {
    name: "James",
    retailerNumber: "2349090326673",
    productName: "MTN AIRTIME",
    amount: "2000",
    desc: "23462075685 N1,000=1.5GB 30days",
    status: "successful",
    reference: "2349090326673",
    date: "5/01/2020 11:45:23",
  },
  {
    name: "James",
    retailerNumber: "2349090326673",
    productName: "MTN AIRTIME",
    amount: "2000",
    desc: "23462075685 N1,000=1.5GB 30days",
    status: "Failed Trans",
    reference: "2349090326673",
    date: "5/01/2020 11:45:23",
  },
  {
    name: "James",
    retailerNumber: "2349090326673",
    productName: "MTN AIRTIME",
    amount: "2000",
    desc: "Voucher MTN AIRTIME",
    status: "successful",
    reference: "2349090326673",
    date: "5/01/2020 11:45:23",
  },
  {
    name: "James",
    retailerNumber: "2349090326673",
    productName: "MTN AIRTIME",
    amount: "2000",
    desc: "23462075685 N1,000=1.5GB 30days",
    status: "successful",
    reference: "2349090326673",
    date: "5/01/2020 11:45:23",
  },
  {
    name: "James",
    retailerNumber: "2349090326673",
    productName: "MTN AIRTIME",
    amount: "2000",
    desc: "23462075685 N1,000=1.5GB 30days",
    status: "successful",
    reference: "2349090326673",
    date: "5/01/2020 11:45:23",
  },
  {
    name: "James",
    retailerNumber: "2349090326673",
    productName: "MTN AIRTIME",
    amount: "2000",
    desc: "Voucher MTN AIRTIME",
    status: "successful",
    reference: "2349090326673",
    date: "5/01/2020 11:45:23",
  },
]

export const HistoryColumn = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",

    // render: text => <a>{text}</a>,
  },
  {
    title: "Retailer number",
    dataIndex: "retailerNumber",
    key: "retailerNumber",
  },
  {
    title: "Product name",
    dataIndex: "productName",
    key: "productName",
  },

  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Description",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",

    render: text =>
      text === "successful" ? (
        <p
          style={{
            color: "#00AA00",
            backgroundColor: "#D8F2DB",
            borderRadius: "3px",
            padding: "2px 13px",
            display: "inline",
            width: "72px !important",
          }}
        >
          <Green
            style={{
              marginRight: "5px",
              position: "relative",
              top: "-2px",
            }}
          />
          {text}
        </p>
      ) : (
        <p
          style={{
            color: "#FF4848",
            backgroundColor: " #FFD8D8",
            borderRadius: "3px",
            padding: "2px 13px",
            display: "inline",
            width: "72px !important",
          }}
        >
          <Red
            style={{
              marginRight: "5px",
              position: "relative",
              top: "-2px",
            }}
          />
          {text}
        </p>
      ),
  },
  {
    title: "Transaction ref",
    dataIndex: "reference",
    key: "reference",
  },
  {
    title: "Created at",
    dataIndex: "date",
    key: "date",
  },
]
