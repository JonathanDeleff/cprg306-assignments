import { itemList } from "./item-list";

export const Item = () => {
  return (
    <div>
      {itemList.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col border-2 border-sky-300 p-2"
          >
            <div className="flex justify-center">
              {item.quantity} - {item.name}
            </div>
            <div className="flex justify-center">{item.category}</div>
          </div>
        );
      })}
    </div>
  );
};
