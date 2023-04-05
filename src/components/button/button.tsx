import { Slot } from "@samuwrite/radix";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { outline } from "../../outline/outline";
import * as s from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  primary?: boolean;
  alert?: boolean
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ asChild, primary, alert, ...rest }, ref): JSX.Element => {
    const Comp = asChild ? Slot.Root : "button";
    return (
      <Comp
        ref={ref}
        className={[
          s.button,
          alert ? s.alert : "",
          primary ? s.primary : s.secondary,
          outline.onFocus,
        ].join(" ")}
        {...rest}
      />
    );
  }
);
