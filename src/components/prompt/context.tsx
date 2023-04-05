import { createContext, ReactNode, useCallback, useState } from "react";
import { PromptDialog, PromptDialogContentProps } from "./dialog";

type Value = string | boolean;

export type { Value as PromptValue };

export type PromptButtons = (resolve: (value: Value) => void) => ReactNode;

interface DialogProps extends Omit<PromptDialogContentProps, "buttons"> {
  buttons: PromptButtons;
}

type Prompt = (props: DialogProps) => Promise<Value>;

export type { Prompt };

export interface PromptState {
  prompt: Prompt;
}

export const PromptContext = createContext<PromptState>({
  prompt: () => {
    throw Error("Prompt context is not implemented");
  },
});

interface ProviderProps {
  children: ReactNode;
}

interface DialogPromise {
  dialog: DialogProps;
  resolve: (value: Value) => void;
}

export const PromptProvider = ({ children }: ProviderProps) => {

  const [promise, setPromise] = useState<DialogPromise | null>(null);

  const prompt: Prompt = useCallback(async (dialog) => {
    const promise = new Promise<Value>((resolve) => {
      setPromise({ dialog, resolve });
    });
    return promise;
  }, []);

  return (
    <PromptContext.Provider value={{ prompt }}>
      {children}
      <PromptDialog.Root
        open={promise !== null}
        onOpenChange={(open) => {
          if (open === false) setPromise(null);
        }}
      >
        {promise !== null ? (
          <PromptDialog.Content
            {...promise.dialog}
            buttons={promise.dialog.buttons(promise.resolve)}
          />
        ) : null}
      </PromptDialog.Root>
    </PromptContext.Provider>
  );
};
