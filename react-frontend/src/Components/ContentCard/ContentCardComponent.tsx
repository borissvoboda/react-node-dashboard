import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function ContentCardComponent() {
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
      <h2>Main</h2>
      <Button variant='contained'>Hello world</Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        vehicula, massa at aliquam sagittis, erat augue lacinia risus, in tempus
        felis ipsum et est. Mauris imperdiet euismod magna vel imperdiet.
        Maecenas interdum cursus nibh, ut tempor quam aliquam a. Integer mollis
        odio sit amet ante faucibus convallis. Integer a euismod nunc. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Integer porta
        malesuada felis et posuere. Donec sollicitudin leo ac ante consectetur,
        id mattis urna euismod. Maecenas faucibus massa venenatis egestas
        maximus. Fusce ultricies vitae quam at lobortis. Nullam imperdiet arcu
        vel malesuada aliquet. Nulla imperdiet ante vel nisi dignissim
        tincidunt. Pellentesque eu lacus ut sapien porta cursus. Mauris
        consequat non lorem ac condimentum. Nam nec ultricies nunc. Etiam dictum
        porta purus et commodo.
      </p>
    </main>
  );
}

export default ContentCard;
