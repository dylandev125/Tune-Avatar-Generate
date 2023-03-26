interface RadioProps {
  className?: string;
  id: string;
  value: number;
  onChange: (e: any) => void;
  defaultChecked?: boolean;
  children: React.ReactNode;
}

const RadioInput = ({
  className,
  id,
  value,
  onChange,
  defaultChecked,
  children,
}: RadioProps) => {
  return (
    <div className="flex gap-x-1 items-start mt-2">
      <input
        className="mt-2"
        type="radio"
        id={id}
        name="contact"
        value={value}
        onClick={(e: any) => onChange(e)}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default RadioInput;
