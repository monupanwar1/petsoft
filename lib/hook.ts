"use client"
import { petContext } from "@/app/context/pet-context-provider";
import { SearchContext } from "@/app/context/search-context-provider";
import { useContext } from "react";

export function usePetContext() {
    const context=useContext(petContext);
    if(!context){
        throw new Error (
            "usePetContext must  be used with a petContextProvider"
        )
    }

    return context;

}
export function useSearchContext() {
    const context=useContext(SearchContext);
    if(!context){
        throw new Error (
            "useSearchContext must  be used with a SearchContextProvider"
        )
    }

    return context;

}