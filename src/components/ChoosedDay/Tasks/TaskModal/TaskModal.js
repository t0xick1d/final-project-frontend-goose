import React, { useEffect, useRef } from 'react';

import { Button, ModalContent, SvgBtn } from './TaskModal.styled';
import Icons from '../../../../images/sprite.svg';

export const TaskModal = ({ onClose, onEdit, columns, position }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
        return;
      }
    };

    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: '0',
          top: '0',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ModalContent position={position} ref={modalRef}>
          {columns.map(column => {
            return (
              <Button
                key={column.category}
                onClick={() => {
                  onEdit(column.category);
                }}
              >
                {column.title}
                <SvgBtn>
                  <use href={`${Icons}#icon-arrow`}></use>
                </SvgBtn>
              </Button>
            );
          })}
        </ModalContent>
      </div>
    </>
  );
};
