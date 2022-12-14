import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit'
import { TypeResultItem } from '../../types/Result';
import { TypeWordItem } from '../../types/Word';
import { addAction, deleteAction, addResult, deleteResult } from './actions';

const wordsReducer = createReducer<TypeWordItem[] | []>(() => {
   const saved = localStorage.getItem("words");
   const initialValue = saved && JSON.parse(saved);
   return initialValue || [];
}, {
   [addAction.type]: (state, action: PayloadAction<TypeWordItem>) => {
      return state = [...state, action.payload];
   },
   [deleteAction.type]: (state, action: PayloadAction<string>) => {
      return state = state.filter((item: TypeWordItem) => item.id !== action.payload);
   },
})

const resultCountReducer = createReducer<TypeResultItem[] | []>(() => {
   const saved = localStorage.getItem("results");
   const initialValue = saved && JSON.parse(saved);
   return initialValue || [];
}, {
   [addResult.type]: (state, action: PayloadAction<TypeResultItem>) => {
      return state = [...state, action.payload];
   },
   [deleteResult.type]: (state, action: PayloadAction<string>) => {
      return state = state.filter((item: TypeResultItem) => item.id !== action.payload);
   },
});

export const rootReducer = combineReducers({
   words: wordsReducer,
   results: resultCountReducer,
})