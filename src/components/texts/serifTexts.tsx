import React, { useContext, ChangeEvent } from 'react';
import { useState,useCallback, FC } from 'react';
import { TextsContext } from '../../Provider/TextContextsProvider';
import {SketchPicker, ColorResult} from "react-color";
import type { TextsProps } from "../../types/TextsProps"


export const SerifTexts: FC<TextsProps> = (props) => {
    const {text, setText} = useContext(TextsContext);
    
    const [textColor, setTextColor] = useState<ColorResult>();

    const {rgb} = textColor|| {};
    const updateTextColor = useCallback((textColor: ColorResult) => setTextColor(textColor), []);

    const fontSize = props.fontSize;
    const fontWeight = props.fontWeight;

    return(
        <>
            <p style={{fontFamily: "serif", color: textColor?.hex, fontSize: fontSize, fontWeight: fontWeight}}>{text}</p>
            <SketchPicker onChange={updateTextColor} color = {rgb}/>
        </>
    )
}