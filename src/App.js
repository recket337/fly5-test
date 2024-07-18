import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AnimatePresence, motion } from 'framer-motion';
import { addElement, removeElement } from './store';

function App() {
  const elements = useSelector(state => state.elements);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addElement());
  };

  const handleRemove = () => {
    dispatch(removeElement());
  };

  return (
    <div>
      <button onClick={handleAdd}>Добавить</button>
      <button onClick={handleRemove}>Удалить</button>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        <AnimatePresence initial={false}>
          {elements.map((element, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              style={{ width: '20%', height: 0, paddingBottom: '20%', position: 'relative', backgroundColor: element.color, margin: '5px' }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
