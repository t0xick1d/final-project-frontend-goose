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
      <ModalContent position={position} onMouseLeave={onClose} ref={modalRef}>
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
    </>
  );
};
