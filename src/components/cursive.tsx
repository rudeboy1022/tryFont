import React from 'react';
import { useState,useCallback, FC, ChangeEvent } from 'react';
import {SketchPicker, ColorResult} from "react-color";
import { CursiveTexts } from './texts/cursiveTexts';
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react';

export const Cursive: FC = () => {

    const [inputFontSizeValue, setInputFontSizeValue] = useState<number>(30);
    const handleFontSizeValue = (e: ChangeEvent<HTMLInputElement>) => setInputFontSizeValue(parseInt(e.target.value));

    const [inputFontWeightValue, setInputFontWeightValue] = useState<number>(100);
    const handleFontWeightValue = (e: ChangeEvent<HTMLInputElement>) => setInputFontWeightValue(parseInt(e.target.value));
    
    const [backgroundColor, setBackgroundColor] = useState<ColorResult>();

    const {rgb} = backgroundColor || {};

    const updateBackgroundColor = useCallback((backgroundColor: ColorResult) => setBackgroundColor(backgroundColor), []);

    const containerStyle = css({
        padding: 0,
        margin: 0,
        width: "100%",
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    });

    return(
        <>
            <h2>Cursive</h2>
            <div className='cursiveBackGroundContainer' style={{backgroundColor: backgroundColor?.hex}} css={containerStyle}>
                <CursiveTexts fontSize={inputFontSizeValue} fontWeight={inputFontWeightValue}/>
            </div>
            <SketchPicker onChange={updateBackgroundColor} color = {rgb}/>
            <input type="number" onChange={handleFontSizeValue} />
            <input type="number" onChange={handleFontWeightValue} min="100" max="900"/>
        </>
    )
}