import { useState,useCallback, FC, ChangeEvent } from 'react';
import {SketchPicker, ColorResult} from "react-color";
import { MonoSpaceTexts } from './texts/monospaceTexts';

export const MonoSpace: FC = () => {

    const [inputFontSizeValue, setInputFontSizeValue] = useState<number>(30);
    const handleFontSizeValue = (e: ChangeEvent<HTMLInputElement>) => setInputFontSizeValue(parseInt(e.target.value));

    const [inputFontWeightValue, setInputFontWeightValue] = useState<number>(100);
    const handleFontWeightValue = (e: ChangeEvent<HTMLInputElement>) => setInputFontWeightValue(parseInt(e.target.value));
    
    const [backgroundColor, setBackgroundColor] = useState<ColorResult>();

    const {rgb} = backgroundColor || {};

    const updateBackgroundColor = useCallback((backgroundColor: ColorResult) => setBackgroundColor(backgroundColor), []);

    return(
        <>
            <h2>MonoSpace</h2>
            <div className='monospaceBackGroundContainer' style={{backgroundColor: backgroundColor?.hex}}>
                <MonoSpaceTexts fontSize={inputFontSizeValue} fontWeight={inputFontWeightValue}/>
            </div>
            <SketchPicker onChange={updateBackgroundColor} color = {rgb}/>
            <input type="number" onChange={handleFontSizeValue} />
            <input type="number" onChange={handleFontWeightValue} min="100" max="900"/>
        </>
    )
}