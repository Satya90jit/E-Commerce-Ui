const DropdownField = ({ placeholder }: { placeholder: string }) => (
  <select className="input-field text-gray-400">
    <option>{placeholder}</option>
  </select>
);
export default DropdownField;
