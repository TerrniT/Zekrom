import { RadioGroup } from "@samuwrite/radix";
import { outline } from "../../outline/outline";
import * as s from "./option.module.css";

interface Props {
  icon: JSX.Element;
  label: string;
  value: string;
}

export const SettingsRadioOption = ({ icon, label, value }: Props): JSX.Element => {

  return (
    <RadioGroup.Item
      value={value}
      className={[s.container, outline.onFocus].join(" ")}
    >
      <span className={s.icon}>{icon}</span>
      <span className={s.label}>{label}</span>
    </RadioGroup.Item>
  );
};
