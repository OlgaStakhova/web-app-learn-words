import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWords } from '../redux/store';
import { deleteAction } from '../redux/words/actions';

export const WordsList: FC = () => {
    const words = useSelector(getWords);
    const dispach = useDispatch();
    const handlerDelete = (id: string) => {
        dispach(deleteAction(id))
    }
    
    return (
        <>
            <h2 className="app-title">Vocabulary</h2>
            <table
                className="table is-striped is-hoverable is-narrow is-fullwidth"
            >
                <thead>
                    <tr>
                        <th>
                            <span
                                className="is-flex is-flex-wrap-nowrap"
                                style={{ padding: '5px' }}
                            >
                                Number
                            </span>
                        </th>

                        <th>
                            <span
                                className="is-flex is-flex-wrap-nowrap"
                                style={{ padding: '5px' }}
                            >
                                Word
                            </span>
                        </th>

                        <th>
                            <span
                                className="is-flex is-flex-wrap-nowrap"
                                style={{ padding: '5px' }}
                            >
                                Translation
                            </span>
                        </th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {words.map((word, index) => (
                        <tr key={word.id} >
                            <td className='wordItem'>{index + 1}</td>
                            <td className='wordItem'>{word.word}</td>
                            <td className='wordItem'>{word.translation}</td>
                            <td>
                                <button
                                    type='button'
                                    onClick={() => handlerDelete(word.id)}
                                    className="button is-info is-light"
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
