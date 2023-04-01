import { ThreeBarsIcon } from "@primer/octicons-react";
import { useState } from "react";
import { Dropdown } from "../components/dropdown/dropdown";
import { Link } from "../link/link";
import { Tooltip } from "../components/tooltip/tooltip";
import { ToolbarButton } from "./button/button";

export const ToolbarMenu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen}>
      <Tooltip content="Menu" >
        <Dropdown.Trigger asChild>
          <ToolbarButton Icon={ThreeBarsIcon} label="Menu" selected={open} />
        </Dropdown.Trigger>
      </Tooltip>
      <Dropdown.Portal >
        <Dropdown.Content >
          <Dropdown.Item asChild>
            <Link href="https://github.com/terrnit/zekrom">GitHub</Link>
          </Dropdown.Item>
          <Dropdown.Item asChild>
            <Link href="https://t.me/terrnit">Telegram</Link>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};
