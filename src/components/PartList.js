import { LIST_PARTS } from "../constant";

const PartList = ({ functionList, valueList }) => {
  return LIST_PARTS.map((item, idx) => {
    const val = valueList[idx];
    return (
      <div className="list-section" key={item.id}>
        <h2>{item.id}</h2>
        <div className="list">
          {Array(item.total)
            .fill(1)
            .map((_, index) => {
              return (
                <div
                  className={`clickable square ${
                    val === index ? "selected" : ""
                  }`}
                  onClick={() => functionList[idx](index)}
                  key={index}
                >
                  <img
                    src={`/character_picture/${item.path}/${index + 1}.png`}
                    height={60}
                    alt="Hello"
                    className="img-center"
                    style={{ top: "50%" }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  });
};

export default PartList;
