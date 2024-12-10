type Props = {
    discount?: number;
};

const Badge = ({ discount }: Props) => {
    return (
        <span 
            className={`absolute text-white rounded ${discount ? "bg-yellow" : "bg-blue"} rounded-tl-[12px] rounded-br-[12px] lg:rounded-tl-[24px] lg:rounded-br-[24px] px-2 py-1 lg:px-4 lg:py-3`}>
            {discount ? `%${discount} indirim` : "Yeni"}
        </span>
    );
};

export default Badge;

