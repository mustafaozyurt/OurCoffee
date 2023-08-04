const FormItem = ({ children, value, onChange }) => {
  return (
    <label className="formitem">
      {children}
      <input type="text" value={value} onChange={onChange} placeholder="type here.." />
    </label>
  );
};

export default FormItem;
