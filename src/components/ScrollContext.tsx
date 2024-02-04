import React, { createContext, useContext, useRef, MutableRefObject, ReactNode } from 'react';

interface ScrollContextType {
  registerSection: (id: string, ref: MutableRefObject<HTMLElement | null>) => void;
  getSectionRef: (id: string) => MutableRefObject<HTMLElement | null> | undefined;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
  children: ReactNode; 
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const sectionRefs = useRef<{ [key: string]: MutableRefObject<HTMLElement | null> }>({});

  const registerSection = (id: string, ref: MutableRefObject<HTMLElement | null>) => {
    const normalizedId = id.replace(/^#/, '');
    sectionRefs.current[normalizedId] = ref;
    console.log(`Ref being registered for ${normalizedId}`, ref);
  };
  
  const getSectionRef = (id: string) => {
    const normalizedId = id.replace(/^#/, '');
    console.log("Getting section ref for:", normalizedId, sectionRefs.current[normalizedId]);
    return sectionRefs.current[normalizedId];
  };
  
  return (
    <ScrollContext.Provider value={{ registerSection, getSectionRef }}>

      {children}
    </ScrollContext.Provider>
  );
};
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};