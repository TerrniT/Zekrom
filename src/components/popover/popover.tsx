import { Popover as Radix } from "@samuwrite/radix";
import { animation } from "../../animation/animation";
import { Card } from "../card/card";
import { Scroll } from "../scroll/scroll";
import "./popover.css";
import * as s from "./popover.module.css";

const Content = ({ children, ...rest }: Radix.PopoverContentProps): JSX.Element => {
  return (
    <Radix.Portal>
      <Radix.Content
        sideOffset={12}
        collisionPadding={12}
        className={[s.container, Card.glass, animation.flip].join(" ")}
        {...rest}
      >
        <Scroll>
          <div className={s.content}>{children}</div>
        </Scroll>
      </Radix.Content>
    </Radix.Portal>
  );
};

export const Popover = {
  Content,
  Root: Radix.Root,
  Trigger: Radix.Trigger,
};
