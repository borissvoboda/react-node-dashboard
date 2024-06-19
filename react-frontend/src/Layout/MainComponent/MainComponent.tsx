import { useState, useEffect } from 'react';

import TodoList from '../../Components/TodoList';

function MainComponent() {
  type ContentCard = {
    id: number;
    title: string;
    content: string;
  };

  // const [count, setCount] = useState<number>(0);
  const [contentCards, setContentCards] = useState<ContentCard[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/contentCards')
      .then((response) => response.json())
      .then((data) => setContentCards(data));
  }, []);

  console.log('Users: ' + contentCards);

  return (
    <main>
      <TodoList />
    </main>
  );
}

export default MainComponent;
