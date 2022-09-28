import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeWordItem } from "../types/Word";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";

import { addResult } from '../redux/words/actions'
import { TypeResultItem } from "../types/Result";


function shuffle(array:string[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

interface Props {
    playWords: TypeWordItem[],
}

export const PlayTraining: FC<Props> = (props) => {
    const { playWords } = props;
  const initialButAns = [
    {name: playWords[0].translation, id:1},
    {name: playWords[4].translation, id:2},
    {name: playWords[2].translation, id:3},
    {name: playWords[5].translation, id:4},
  ]
const [wordTranslate, setWordTraslate] = useState(playWords[0].word);
const [count, setCount] = useState(0);
const [ansvers, setAnsvers] = useState(initialButAns);
const navigate = useNavigate();
const dispach = useDispatch();

const [counterCorectAnsver, setCounterCorectAnsver] = useState(0);
    let wordToTranslate = '';


const handelСhoose = (choosedButText: string) => {
 
    if( count === 9) {
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

    for (let i = 0; incorectAnsw.length < 4; i++) {
      if( playWords[count].translation !== playWords[i].translation){
        incorectAnsw.push(playWords[i].translation);
      }
    }


      shuffle(incorectAnsw);
      const ansversWithId = incorectAnsw.map((item, index) => ({name:item, id:index}))
    setAnsvers(ansversWithId)
   

    wordToTranslate = playWords[count].word;

    setWordTraslate(() => wordToTranslate)
    setCount((prev) => prev + 1);


    if ((count === 0) && playWords[0].translation=== choosedButText) {
        setCounterCorectAnsver(prev => prev + 1);
        } 


    if (count > 0 && playWords[count - 1].translation=== choosedButText) {
        setCounterCorectAnsver(prev => prev + 1);
        } 
    }
    console.log(counterCorectAnsver)

    const handelSubmitForm = (event: FormEvent) => {
        event.preventDefault();
    }
   
    return (
        <>
            <h2>Сhoose the correct translation</h2>

            <form action="" onChange={(event) => handelSubmitForm(event)}>
                <label>{wordTranslate}</label>
                {ansvers.map((answer) => (
                    <button key={answer.id} className='button' onClick={(event) => { 
                        const value: string | null = (event.target as HTMLElement).textContent;
                        value && handelСhoose(value)
                    }}
                    >
                        {answer.name}
                    </button>
                ))}
            </form>
        </>

    )
}