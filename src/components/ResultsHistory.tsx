import { FC } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getResult } from '../redux/store';
import { deleteResult } from "../redux/words/actions";
import { TypeResultItem } from "../types/Result";

export const ResultsHistory: FC = () => {
    const results = useSelector(getResult);
    const dispach = useDispatch();
    const handlerDelete = (id: string) => {
        dispach(deleteResult(id))
    }

    return (
        <>
            <h2 className="app-title"> Training statistics</h2>
            <ul className='list-results'>
                {results.length > 0 
                  ? results.map((item: TypeResultItem) => (
                      <li key={item.id} className='item-results'>
                        <p><span className="tag is-light is-medium lable-result">date: </span>{item.date}</p>
                        <p><span className="tag is-light is-medium lable-result">result: </span>{item.result}</p>
                        <button
                            type='button'
                            onClick={() => handlerDelete(item.id)}
                            className='button is-info is-light'
                        >
                            delete
                        </button>
                      </li>
                    )) 
                  : (<li> <p className="app-notification">Nothing to show</p></li>)
                }
            </ul>
        </>)

}