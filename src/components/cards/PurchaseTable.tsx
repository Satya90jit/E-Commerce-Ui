"use client";

import { FilterList } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FilterBar, Pagination } from "../core";
import { useState } from "react";

const demoData = [
  {
    orderDate: "12 Aug 2022 - 12:55 PM",
    orderType: "Home Delivery",
    unitPrice: "₦1,225,000.00",
    qty: 1,
    discount: "₦0.00",
    orderTotal: "₦1,225,000.00",
    status: "Delivered",
  },
  {
    orderDate: "13 Aug 2022 - 2:30 PM",
    orderType: "Home Delivery",
    unitPrice: "₦725,000.00",
    qty: 2,
    discount: "₦0.00",
    orderTotal: "₦1,450,000.00",
    status: "Pending",
  },
  {
    orderDate: "14 Aug 2022 - 4:00 PM",
    orderType: "In-Store Pickup",
    unitPrice: "₦125,000.00",
    qty: 3,
    discount: "₦0.00",
    orderTotal: "₦375,000.00",
    status: "Delivered",
  },
  {
    orderDate: "15 Aug 2022 - 10:00 AM",
    orderType: "Home Delivery",
    unitPrice: "₦125,000.00",
    qty: 5,
    discount: "₦0.00",
    orderTotal: "₦625,000.00",
    status: "Cancelled",
  },
  // Add more rows as needed
];

export default function PurchasesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 200;
  const itemsPerPageOptions = [10, 20, 50];

  return (
    <div className="bg-white p-5 w-full shadow-md rounded-lg flex flex-col gap-3">
      <div className="lg:flex justify-between gap-5 items-center py-4 overflow-x-auto">
        <p className="text-lg text-gray-600 font-medium whitespace-nowrap lg:pb-0 pb-5">
          Purchases
        </p>
        <FilterBar />
      </div>
      <TableContainer
        component={Paper}
        className="overflow-x-auto rounded-md"
        style={{ boxShadow: "none" }}
      >
        <Table style={{ minWidth: "1000px" }}>
          {" "}
          {/* Prevents table from squeezing */}
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                Order Date
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                Order Type
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                Unit Price
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                Qty.
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                Discount
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                Order Total
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                Status
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoData.map((row, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"} // Alternating background for rows
                style={{
                  borderBottom: "none", // Remove row border
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{row.orderDate}</TableCell>
                <TableCell>{row.orderType}</TableCell>
                <TableCell>{row.unitPrice}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{row.discount}</TableCell>
                <TableCell>{row.orderTotal}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded ${
                      row.status === "Delivered"
                        ? "bg-blue-100 text-blue-600"
                        : row.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        totalItems={totalItems}
        itemsPerPageOptions={itemsPerPageOptions}
        currentPage={currentPage}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </div>
  );
}
