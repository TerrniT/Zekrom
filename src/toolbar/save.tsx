import { DownloadIcon } from "@primer/octicons-react";
import { useCallback, useContext } from "react";
import { Button } from "../button/button";
import { DocState } from "../doc/type";
import { Editor } from "../editor/type";
import { getErrorMessage } from "../error/message";
import { saveDoc } from "../host/save";
import { saveDocAs } from "../host/save-as";
import { PromptContext, PromptState, PromptValue } from "../prompt/context";
import { PromptDialog } from "../prompt/dialog";
import { alertErrorWithMac } from "../prompt/mac";
import { useShortcut } from "../shortcut/shortcut";
import { Tooltip } from "../tooltip/tooltip";
import { ToolbarButton } from "./button/button";

interface Props extends DocState {
  editor: Editor;
}

const save = async (props: Props & PromptState): Promise<void> => {
  const { doc, editor, setDoc, prompt } = props;

  const content = editor.getValue();

  try {
    if (doc.handle === null) {
      // New file, never save -> Save as
      const newDoc = await saveDocAs(content);
      if (newDoc === null) return;
      setDoc(newDoc);
    } else {
      // Opened file -> Save
      await saveDoc(doc.handle, content);
      setDoc({ ...doc, content });
    }
  } catch (error: unknown) {
    const title = "Cannot save file";
    await alertErrorWithMac({ title, error, prompt });
    return;
  }
};

export const ToolbarSave = (props: Props): JSX.Element => {
  const { doc, editor, setDoc } = props;
  const { prompt } = useContext(PromptContext);

  const callback = useCallback(() => {
    save({ doc, editor, setDoc, prompt });
  }, [doc, editor, setDoc, prompt]);
  useShortcut("$mod+s", callback);

  return (
    <Tooltip content="Save" shortcut="⌘ S">
      <ToolbarButton
        Icon={DownloadIcon}
        label="Save"
        onClick={() => save({ ...props, prompt })}
      />
    </Tooltip>
  );
};
