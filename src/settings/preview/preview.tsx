import { Layout, LayoutState } from "../../layout/type";
import { SettingsRadioGroup } from "../radio/group";
import { Settings, SettingsState } from "../type";
import { PreviewIcon } from "./icon";

interface Props extends SettingsState, LayoutState { }

export const getLayoutFromPreview = (preview: Settings["preview"]): Layout => {
  return preview === "full" ? "preview" : "split";
};

export const SettingsPreview = ({ setSettings, settings, layout, setLayout }: Props): JSX.Element => {
  return (
    <SettingsRadioGroup
      value={settings.preview}
      onValueChange={(value) => {
        const preview = value as Settings["preview"];
        setSettings((prev) => ({ ...prev, preview }));

        if (layout === "editor") return;
        const next = getLayoutFromPreview(preview);
        if (layout === next) return;
        setLayout(next);
      }}
      options={[
        { label: "Split", value: "split", icon: <PreviewIcon mode="split" /> },
        { label: "Full", value: "full", icon: <PreviewIcon mode="full" /> },
      ]}
      label="Preview"
    />
  );
};
