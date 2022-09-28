import { FC } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getResult } from '../redux/store';
import { deleteResult } from "../redux/words/actions";
import { TypeResultItem } from "../types/Result";

export const ResultsHistory: FC = () => {
    const results = useSelector( getResult);
    const dispach = useDispatch();
    const handlerDelete = (id: string) => {
        dispach(deleteResult(id))
    }
    return ( <ul> 
    { results.length > 0 ? results.map((item: TypeResultItem) => (
        <li key={item.id}>
            <p><span>date: </span>{ item.date }</p>
            <p><span>result: </span>{ item.result }</p>
            <button type='button' onClick={() => handlerDelete(item.id)}>delete</button>
        </li>
    )) : (<li> <p>Nothing to show</p></li>)}
    </ul>)
}