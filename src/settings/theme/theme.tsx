import { SettingsRadioGroup } from "../radio/group";
import { Settings, SettingsState } from "../type";
import { ThemeIcon } from "./icon";

interface Props extends SettingsState { }

export const SettingsTheme = ({ settings, setSettings }: Props): JSX.Element => {
  return (
    <SettingsRadioGroup
      value={settings.theme}
      onValueChange={(value) => {
        const theme = value as Settings["theme"];
        setSettings((prev) => ({ ...prev, theme }));
      }}
      options={[
        { label: "Solarized", value: "main", icon: <ThemeIcon theme="main" /> },
        { label: "Light", value: "dawn", icon: <ThemeIcon theme="dawn" /> },
        { label: "Dark", value: "moon", icon: <ThemeIcon theme="moon" /> },
      ]}
      label="Theme"
    />
  );
};
