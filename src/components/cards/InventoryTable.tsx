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
    imageUrl: "/3dshirt.png",
    productName: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Publish",
    status: "Published",
  },
  {
    imageUrl: "/3dshirt.png",
    productName: "iPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "₦725,000.00",
    inStock: 12,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Publish",
    status: "Published",
  },
  {
    imageUrl: "/3dshirt.png",
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    inStock: 120,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    action: "Unpublish",
    status: "Unpublished",
  },
  {
    imageUrl: "/3dshirt.png",
    productName: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    inStock: "Out of Stock",
    discount: "₦0.00",
    totalValue: "₦0.00",
    action: "Unpublish",
    status: "Unpublished",
  },
  // Add more rows as needed
];

export default function InventoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 200;
  const itemsPerPageOptions = [10, 20, 50];
  return (
    <div className="bg-white p-5 w-full shadow-md rounded-lg flex flex-col gap-3">
      <div className="lg:flex justify-between gap-5 items-center py-4 overflow-x-auto">
        <p className="text-lg text-gray-600 font-medium whitespace-nowrap lg:pb-0 pb-5">
          Inventory Items
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
                Product Name
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                Category
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
                In-Stock
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
                Total Value
                <IconButton size="small">
                  <FilterList fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                Action
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
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      src={row.imageUrl}
                      alt={row.productName}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    {row.productName}
                  </div>
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.unitPrice}</TableCell>
                <TableCell>{row.inStock}</TableCell>
                <TableCell>{row.discount}</TableCell>
                <TableCell>{row.totalValue}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" size="small">
                    {row.action}
                  </Button>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded ${
                      row.status === "Published"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-orange-100 text-orange-600"
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
