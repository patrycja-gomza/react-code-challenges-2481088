import { useEffect, useState } from "react";

const getDogPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json()
  return data.message
};

export default function DogPics() {
  // API: https://dog.ceo/dog-api/

  const [dogPic, setDogPic] = useState('');

  useEffect(() => {
    getDogPic().then((pic) => setDogPic(pic));
  }, []);

  return (
    <div className='dog-pics'>
      <img src={dogPic} />
      <button
        onClick={async () => {
          const pic = await getDogPic();
          setDogPic(pic);
        }}
      >
        🐶
      </button>
    </div>
  )
}
