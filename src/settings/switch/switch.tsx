import { Label } from "@samuwrite/radix";
import { SwitchButton } from "../../components/switch/switch";
import * as s from "./switch.module.css";

interface Props {
  id: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  label: string;
}

export const SettingsSwitch = ({ id, checked, setChecked, label }: Props): JSX.Element => {
  return (
    <div className={s.container}>
      <Label.Root htmlFor={id}>{label}</Label.Root>
      <SwitchButton id={id} checked={checked} onCheckedChange={setChecked} />
    </div>
  );
};
