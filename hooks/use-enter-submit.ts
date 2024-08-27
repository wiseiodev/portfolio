import { useCallback, useRef } from 'react';

export function useEnterSubmit() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        formRef.current?.requestSubmit();
      }
    },
    []
  );

  return { formRef, onKeyDown: handleKeyDown };
}
