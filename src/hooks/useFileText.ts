import React from 'react';

interface IuseFileText {
  text: string,
  isLoading: boolean,
}

export function useFileText(filename: string, loadingText = ''): IuseFileText {
  const [text, setText] = React.useState(loadingText);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(filename)
      .then(async (raw) => raw.text())
      .then((content) => {
        setText(content);
        setIsLoading(false);
      });
  });

  return {
    text,
    isLoading
  };
}
