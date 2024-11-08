const TextAreaField = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) => (
  <textarea
    placeholder={placeholder}
    className={`input-field ${className}`}
  ></textarea>
);
export default TextAreaField;
