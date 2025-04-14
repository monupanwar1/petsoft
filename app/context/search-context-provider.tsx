'use client';

import {createContext, useState } from 'react';

type SearchContextProviderProps = {
  children: React.ReactNode;
};
type TSearchContext = {
    searchQuery:string;
    handlChangeSearchQuery:(newValue:string)=>void;
};

export const SearchContext = createContext<TSearchContext | null>(null);
export default function SearchContextProvider({
  children
}: SearchContextProviderProps) {
    const [searchQuery, setSearchQuery] = useState('');



    // derived state

    // events handlers /actions
    const handlChangeSearchQuery=(newValue:string)=>(
        setSearchQuery(newValue)
    )

  
  
  return <SearchContext.Provider value={{
      searchQuery,
      handlChangeSearchQuery
  }}>{children}</SearchContext.Provider>;
}
