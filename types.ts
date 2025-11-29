import React from 'react';

export interface Client {
  name: string;
  image: string;
  channelLink: string;
  review: string;
  rating: number;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Work {
  id: number;
  image: string;
  title: string;
  category: string;
}