import { ReactNode } from "react";
import { tailwindTemplate } from "./tailwind/tailwind";

const CLASS_NAMES: Record<string, string | undefined> = {
  tailwind: tailwindTemplate,
};

interface Props {
  template: string;
  children: ReactNode;
}

export const TemplateContainer = ({ template, children }: Props): JSX.Element => {

  let className = CLASS_NAMES[template];
  if (className === undefined) {
    console.warn(`Unknown template: "${template}"`);
    className = tailwindTemplate;
  }

  return <div className={className}>{children}</div>;
}
