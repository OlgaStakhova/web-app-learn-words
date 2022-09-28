import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeWordItem } from "../types/Word";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addResult } from '../redux/words/actions'
import { TypeResultItem } from "../types/Result";

function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  return array;
}

interface Props {
    playWords: TypeWordItem[],
}

export const PlayTraining: FC<Props> = (props) => {
    const { playWords } = props;
    const initialButAns = [
        { name: playWords[0].translation, id: 1 },
        { name: playWords[4].translation, id: 2 },
        { name: playWords[2].translation, id: 3 },
        { name: playWords[5].translation, id: 4 },
    ]
    const [wordTranslate, setWordTraslate] = useState(playWords[0].word);
    const [count, setCount] = useState(0);
    const [ansvers, setAnsvers] = useState(initialButAns);
    const navigate = useNavigate();
    const dispach = useDispatch();

    const [counterCorectAnsver, setCounterCorectAnsver] = useState(0);
    let wordToTranslate = '';

    const handelСhoose = (choosedButText: string) => {

        if (count >= 9) {
            console.log('end -> result');
            const result: TypeResultItem = {
                id: uuidv4(),
                date: new Date().toLocaleString(),
                result: `${counterCorectAnsver * 10}%`,
            }
            dispach(addResult(result));

            navigate('/resultsHistory');
            return;
        }

        const incorectAnsw = [playWords[count].translation];

        for (let i = 0; incorectAnsw.length < 4; i+=1) {
            if (playWords[count].translation !== playWords[i].translation) {
                incorectAnsw.push(playWords[i].translation);
            }
        }

        const incorectAnswShuffle = shuffle(incorectAnsw);
        const ansversWithId = incorectAnswShuffle.map((item, index) => ({ name: item, id: index }))
        setAnsvers(ansversWithId)
        wordToTranslate = playWords[count].word;
        setWordTraslate(() => wordToTranslate)
        setCount((prev) => prev + 1);

        if ((count === 0) && playWords[0].translation === choosedButText) {
            setCounterCorectAnsver(prev => prev + 1);
        }

        if (count > 0 && playWords[count - 1].translation === choosedButText) {
            setCounterCorectAnsver(prev => prev + 1);
        }
    }

    return (
        <>
            <h2 className="app-notification">Сhoose the correct translation word:</h2>
            <div className='form-play'>
                <label className='tag is-info is-large word-to-translate'>{wordTranslate}</label>
                {ansvers.map((answer) => (
                    <button key={answer.id} className='button is-normal' onClick={(event) => {
                        const value: string | null = (event.target as HTMLElement).textContent;
                        value && handelСhoose(value)
                    }}
                    >
                        {answer.name}
                    </button>
                ))}
            </div>
        </>
    )
}