interface InputProps {
  title?: string;
  onChange: (e: any) => void;
  className?: string;
  placeholder?: string;
}

const TextInput = ({ title, onChange, className, placeholder }: InputProps) => {
  return (
    <div>
      {title && <label className="text-sm">{title} *</label>}
      <input
        type="text"
        className={`${className} px-[6px] border border-[#685c5c] hover:border-[#4143db] w-full rounded h-10 transition-all outline-none focus:border-[#4143db]`}
        onChange={(e: any) => onChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
