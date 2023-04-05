import { Settings } from "./settings/type";
import { Roles, variants } from "@rose-pine/palette";

interface Props {
  settings: Settings;
}

interface ThemeExtra {
  shadowOpacity: number;
  blurOpacity: number;
}

const EXTRAS: Record<any, ThemeExtra> = {
  blur: {
    blurOpacity: 0.7,
    shadowOpacity: 0.05,
  },
};

export const AppTheme = (props: Props): JSX.Element => {
  const { settings } = props;
  //@ts-ignore
  const variant = variants[settings.theme];
  const variables: string[] = [];

  // Theme colors
  Object.keys(variant).map((key) => {
    const role = key as keyof Roles<unknown, unknown>;
    const color = variant[role];
    variables.push(`--color-${role}: ${color.hex}`);
    // RGB parts for alpha mixing
    const rgb = color.rgb.replace("rgb(", "").replace(")", "");
    variables.push(`--color-${role}-rgb: ${rgb}`);
  });

  // Other theme details like shadow opacity (dark themes need stronger shadow
  // than light themes)
  //const extra = EXTRAS[settings.theme];
  //variables.push(`--shadow-opacity: ${extra.shadowOpacity}`);
  //variables.push(`--blur-opacity: ${extra.blurOpacity}`);

  //return <style>{`:root { ${variables.join(";")} }`}</style>;
  return <></>
};
