import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './words'
import { TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const getWords = (state: RootState) => state.words;
export const getResult = (state: RootState) => state.results;
export default store;


