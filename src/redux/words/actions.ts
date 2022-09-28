import { createAction } from "@reduxjs/toolkit";
import { TypeResultItem } from "../../types/Result";
import { TypeWordItem } from "../../types/Word";

enum typeAction {
    ADD = 'add/words',
    DELETE = 'delete/words',
    ADD_RESULT = 'add/results',
    DELETE_RESULT = 'delete/results'
}

export const addAction = createAction<TypeWordItem, typeAction.ADD >(typeAction.ADD);

export const deleteAction = createAction<string, typeAction.DELETE>(typeAction.DELETE);

export const addResult = createAction<TypeResultItem, typeAction.ADD_RESULT>(typeAction.ADD_RESULT);

export const deleteResult = createAction<string, typeAction.DELETE_RESULT>(typeAction.DELETE_RESULT);
