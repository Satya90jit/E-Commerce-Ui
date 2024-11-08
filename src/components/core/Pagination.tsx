import { useState } from "react";
import {
  Select,
  MenuItem,
  Pagination,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const PaginationComponent = ({
  totalItems,
  itemsPerPageOptions,
  currentPage,
  onPageChange,
}: any) => {
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleItemsPerPageChange = (event: any) => {
    setItemsPerPage(event.target.value);
    onPageChange(1);
  };

  const handlePageChange = (event: any, value: any) => {
    onPageChange(value);
  };

  return (
    <section className="flex md:flex-row flex-col gap-3 md:justify-between">
      {/* Items Per Page Selector */}
      <Box display="flex" alignItems="center" gap="8px">
        <Select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          size="small"
          variant="outlined"
          style={{ width: "60px" }}
        >
          {itemsPerPageOptions.map((option: any) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="body2">Items per page</Typography>
        <Typography variant="body2">
          {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
            currentPage * itemsPerPage,
            totalItems
          )} of ${totalItems} items`}
        </Typography>
      </Box>

      {/* Pagination Controls */}
      <Box display="flex" alignItems="center" gap="8px">
        <Select
          value={currentPage}
          onChange={(e) => handlePageChange(e, parseInt(e.target.value))}
          size="small"
          variant="outlined"
          style={{ width: "50px" }}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <MenuItem className="" key={page} value={page}>
              {page}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="body2">{`of ${totalPages} pages`}</Typography>
        <IconButton
          onClick={() => handlePageChange(null, currentPage - 1)}
          disabled={currentPage === 1}
          size="small"
        >
          <ArrowBack fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => handlePageChange(null, currentPage + 1)}
          disabled={currentPage === totalPages}
          size="small"
        >
          <ArrowForward fontSize="small" />
        </IconButton>
      </Box>
    </section>
  );
};
export default PaginationComponent;
