import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Leyendas y Mitos',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Relativos Varios',
    path: '/sucesos',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Acerca de',
    path: '/products',
    icon: <BiIcons.BiInfoCircle />,
    cName: 'nav-text'
  }
];
