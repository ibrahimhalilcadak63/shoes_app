import { Shoe } from "../../Types";

const Price = ({ item }: { item: Shoe }) => {
    
    // Varsayılan fiyat değeri atadık
    let price = item.price;

    // Eğer indirim oranı varsa yeni fiyatı hesapladık
    if (item.discount) {
        price = item.price * (100 - item.discount) / 100;
    }
  
    return (
        <div className={item.discount ? "text-yellow" : "text-white"}>
            ${price}

            {item.discount && <span className="ps-2 line-through max-xl:hidden">{item.price}</span>}
        </div>
    );
};

export default Price;
