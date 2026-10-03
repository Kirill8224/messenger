import { useSelector, useDispatch } from "react-redux";
import type {RootState, Dispatch} from './store'
export const useAppSelector= useSelector.withTypes<RootState>()
export const useAppDispatch= useDispatch.withTypes<Dispatch>()