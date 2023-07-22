import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useAction = (action) => {
  const drawerState = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();
  console.log('a');
  return useCallback(() => dispatch(action), [dispatch, action]);
};
