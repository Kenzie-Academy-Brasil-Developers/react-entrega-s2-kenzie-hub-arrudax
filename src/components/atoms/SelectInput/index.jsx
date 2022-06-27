import optionsSelect from "./data.js";
import "./style.css";

export const SelectInput = ({ register, name, ...rest }) => {
  return (
    <div>
      <select className="form__Select" {...register(name)} {...rest}>
        {optionsSelect.map(({ value }, index) => (
          <option key={index} value={value === 'Escolha' ? '' : value }>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
