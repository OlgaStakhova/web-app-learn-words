import { FC, useState } from "react";
import { useSelector } from 'react-redux';
import { getWords } from '../redux/store';
import { TypeWordItem } from "../types/Word";
import { PlayTraining } from "./PlayTraining";


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const Training: FC = () => {
    const words = useSelector(getWords);
    const [startPlay, setStartPlay] = useState(false);
    const [playWords, setPlayWords] = useState<TypeWordItem[]>([]);

    const handelRunPlay = () => {
        setStartPlay(true);
        const wordsForPlay = [];
    for (let i = 0; wordsForPlay.length < 12; i += 1) {
        const index = getRandomInt(0, words.length)
        console.log(index)
      wordsForPlay.push(words[index])
    }
      setPlayWords(wordsForPlay);
    }

    return ( <>
    <h2 className="app-title"> Training</h2> 
    {words.length < 9 && <p className="app-notification">'Add more words in vocabulary'</p>}
    {words.length > 9 && !startPlay
    && <button
      className='runPlay button is-link'
      onClick={handelRunPlay}
    >
        Repeat the words
    </button>}
    {startPlay && <PlayTraining playWords={playWords} />}
    </>)
}