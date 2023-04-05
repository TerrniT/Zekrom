import { ScrollArea as Radix } from "@samuwrite/radix";
import { ReactNode } from "react";
import * as s from "./scroll.module.css";

interface Props extends Radix.ScrollAreaProps {
  children: ReactNode;
}

export const Scroll = ({ children, ...rootProps }: Props): JSX.Element => {
  return (
    <Radix.Root className={s.root} {...rootProps}>
      <Radix.Viewport className={s.viewport}>{children}</Radix.Viewport>
      <Radix.Scrollbar orientation="vertical" className={s.scrollbar}>
        <Radix.Thumb className={s.thumb} />
      </Radix.Scrollbar>
    </Radix.Root>
  );
};
