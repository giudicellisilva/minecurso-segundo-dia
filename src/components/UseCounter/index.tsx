import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/redux/counter/counterSlice';
import type { RootState } from '@/redux/store';

export default function UseCounter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
}