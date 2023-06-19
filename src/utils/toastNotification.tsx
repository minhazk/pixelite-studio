import React, { ReactNode } from 'react';
import toast from 'react-simple-toasts';

export const showToast = (text: string) => {
    void toast(<p className='text-sm font-medium text-accent select-none'>{text}</p>, {
        duration: 3000,
        position: 'bottom-center',
        clickable: true,
        clickClosable: true,
        render: (message: ReactNode) => <div className='rounded-md border bg-[#2F2C2C] py-3 px-7 select-none'>{message}</div>,
    });
};
