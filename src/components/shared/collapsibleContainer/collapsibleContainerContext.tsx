import React, {
  createContext, useContext, useMemo, useState
} from 'react';

interface CollapsibleContainerContextValue {
  isCollapsible: boolean;
  setIsCollapsible: (isCollapsible: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const CollapsibleContainerContext = createContext<CollapsibleContainerContextValue>({
  isCollapsible: false,
  setIsCollapsible: () => { /* noop */ },
  isCollapsed: false,
  setIsCollapsed: () => { /* noop */ }
});

export const CollapsibleContainerContextProvider: React.FC = ({ children }) => {
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const context = useMemo(() => ({
    isCollapsible,
    setIsCollapsible,
    isCollapsed,
    setIsCollapsed
  }), [
    isCollapsible,
    isCollapsed,
    setIsCollapsible,
    setIsCollapsed
  ]);

  return (
    <CollapsibleContainerContext.Provider value={context}>
      {children}
    </CollapsibleContainerContext.Provider>
  );
};

export const useCollapsibleContainerContext = (): CollapsibleContainerContextValue => useContext(
  CollapsibleContainerContext
);
