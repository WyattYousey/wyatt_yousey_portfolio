import React from 'react';

interface Props {
    children: React.ReactNode;
}

const MiscCard = ({ children }: Props) => {
  return (
    <div className="p-6 bg-(--color-card-bg) border border-black text-(--color-text)">
      {children}
    </div>
  );
};

export default MiscCard;
