import React, {ReactNode, useState} from 'react'
import { createContext } from "react";

type textContextProps = {
    children: ReactNode,
}


export const TextsContext = createContext({} as {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
});

export const TextsContextsProvider= (props: textContextProps) =>{

    const {children}: textContextProps = props;
    const [text,setText] = useState<string>("input")
    return(
        <TextsContext.Provider value={{text,setText}}>{children}</TextsContext.Provider>
    )
}