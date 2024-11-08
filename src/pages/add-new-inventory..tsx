import React, { useState } from "react";
import AdminBreadcrumbs from "@/components/core/BreadCrumbs";
import {
  DateField,
  DropdownField,
  ImageUpload,
  Label,
  NumberField,
  RichTextArea,
  TextField,
  TimeField,
  ToggleField,
} from "@/components/formFields";
import TextAreaField from "@/components/formFields/TextAreaField";
import { AdminLayout } from "@/layouts";
import { ArrowDropDown } from "@mui/icons-material";
import { useRouter } from "next/router";
import { IOSSwitch } from "@/components/core";

const AddNewInventory = () => {
  const router = useRouter();
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [expiryEnabled, setExpiryEnabled] = useState(false);
  const [returnPolicyEnabled, setReturnPolicyEnabled] = useState(false);

  return (
    <AdminLayout title="New Inventory">
      <section className="main-container">
        <AdminBreadcrumbs links={links} />
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 md:pt-4 pt-2 mb-6">
          <h1 className="text-gray-600 font-medium text-lg md:text-xl">
            New Inventory Item
          </h1>
          <div className="flex gap-3">
            <button className="secondary-button">
              Save as Draft <ArrowDropDown />
            </button>
            <button
              onClick={() => router.push("/view-inventory")}
              className="primary-button"
            >
              Save & Publish
            </button>
          </div>
        </header>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          {/* Left Form Section */}
          <div className="lg:w-[70%] w-full bg-white rounded-lg shadow p-4 md:p-6">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField placeholder="Product Name" />
              <DropdownField placeholder="Select Product Category" />
              <TextField placeholder="Selling Price" />
              <TextField placeholder="Cost Price" />
              <NumberField placeholder="Quantity in Stock" />
              <DropdownField placeholder="Order Type" />

              {/* Discount Toggle */}
              <div className="col-span-1 sm:col-span-2 flex items-center gap-2">
                <span>Discount</span>
                <IOSSwitch
                  checked={discountEnabled}
                  onChange={() => setDiscountEnabled(!discountEnabled)}
                />
              </div>
              {discountEnabled && (
                <>
                  <DropdownField placeholder="Discount Type" />
                  <TextField placeholder="Discount Value" />
                </>
              )}

              {/* Expiry Date Toggle */}
              <div className="col-span-1 sm:col-span-2 flex items-center gap-2">
                <span>Expiry Date</span>
                <IOSSwitch
                  checked={expiryEnabled}
                  onChange={() => setExpiryEnabled(!expiryEnabled)}
                />
              </div>
              {expiryEnabled && <DateField />}

              <TextAreaField
                placeholder="Short Description"
                className="col-span-1 sm:col-span-2 h-20"
              />
              <div className="bg-slate-50/30 rounded-lg p-4 shadow">
                <Label label="Product Long Description" />
                <RichTextArea
                  placeholder="Your text goes here"
                  className="min-h-[6rem] bg-gray-200 text-black rounded-lg"
                />
              </div>

              <div className="bg-white rounded-lg p-4 shadow flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span>Return Policy</span>
                  <IOSSwitch
                    checked={returnPolicyEnabled}
                    onChange={() =>
                      setReturnPolicyEnabled(!returnPolicyEnabled)
                    }
                  />
                </div>
                {returnPolicyEnabled && (
                  <div className="flex gap-4">
                    <DateField />
                    <TimeField />
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Image Upload Section */}
          <div className="lg:w-[30%] w-full">
            <ImageUpload />
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AddNewInventory;

const links = [
  { id: 1, page: "Inventory", link: "/" },
  { id: 2, page: "New Inventory", link: "/add-new-inventory" },
];
