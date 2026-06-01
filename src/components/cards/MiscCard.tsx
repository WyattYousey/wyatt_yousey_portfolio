import React from 'react';

interface Props {
    children: React.ReactNode;
}

const MiscCard = ({ children }: Props) => {
  return (
    <div className=" flex flex-col w-fit mt-10 py-4 px-8 rounded-xl bg-(--color-card-bg) border border-black text-(--color-text)">
      {children}
    </div>
  );
};

export default MiscCard;
