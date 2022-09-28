import { FC, FormEvent, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addAction } from '../redux/words/actions'

export const AddNewWord: FC = () => {
    const [newWord, setNewWord] = useState('');
    const [newWordTranslation, setNewWordTranslation] = useState('');

    const dispach = useDispatch();

    const resetForm = () => {
        setNewWord('');
        setNewWordTranslation('');
    };

    const handelSubmitForm = (event: FormEvent) => {
        event.preventDefault();
        const newWordItem = {
            word: newWord,
            translation: newWordTranslation,
            id: uuidv4(),
        };

        dispach(addAction(newWordItem));
        resetForm();
    };

    const handlerInputWord = (value: string) => {
        setNewWord(value);
    };

    const handlerInputTranslation = (value: string) => {
        setNewWordTranslation(value);
    }

    return (
        <>
            <h2 className="app-title">Add new word</h2>
            <form
                className="newWord"
                onSubmit={handelSubmitForm}
            >
                <div className="field">
                    <label className="label">Word</label>
                    <div className="control">
                        <input
                            type="text"
                            placeholder="Word"
                            onChange={(event) => handlerInputWord(event.target.value)}
                            value={newWord}
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Word translation</label>
                    <div className="control">
                        <input
                            type="text"
                            placeholder="Word translation"
                            onChange={(event) => handlerInputTranslation(event.target.value)}
                            value={newWordTranslation}
                            required
                        />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button
                            type="submit"
                            data-cy="submit-button"
                            className="button is-link"
                        >
                            {"Add new word"}
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
