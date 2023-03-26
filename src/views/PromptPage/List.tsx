interface ListProps {
  id: number;
  title: string;
  image: string;
  onClick: (e: any) => void;
}

const List = (props: ListProps) => {
  return (
    <li className="overflow-hidden mx-0 border-b border-[#CCC] px-2 py-5 hover:bg-[#CCC] transition-all cursor-pointer"
    onClick={(e) => props.onClick(e)}
    value={props.id}
    >
      <img
        className="w-12 h-12 rounded-full float-left mr-[10px]"
        src={props.image}
        alt="img"
      />
      <span className="block font-bold">{props.title}</span>
      <span className="italic text-[#999999] block">{props.id}</span>
    </li>
  );
};

export default List;
