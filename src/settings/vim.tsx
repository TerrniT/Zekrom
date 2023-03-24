import { SettingsSwitch } from "./switch/switch";
import { SettingsState } from "./type";

interface Props extends SettingsState { }

export const SettingsVim = ({ settings, setSettings }: Props): JSX.Element => {
  return (
    <SettingsSwitch
      checked={settings.vim}
      setChecked={(checked) => {
        setSettings((prev) => ({ ...prev, vim: checked }));
      }}
      id="settings-vim"
      label="Vim mode"
    />
  );
};
