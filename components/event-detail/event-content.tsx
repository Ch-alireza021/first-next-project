import { FC, ReactNode } from 'react';

interface IEventContent{
  children:ReactNode;
}

const EventContent:FC<IEventContent>=({children})=> {
  return (
    <section className="tetx-2xl text-[#3a3a3a] w-11/12 max-w-[40em] m-auto mt-[12vh] text-center">
      {children}
    </section>
  );
}

export default EventContent;
