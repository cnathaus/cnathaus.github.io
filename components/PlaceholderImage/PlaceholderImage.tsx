import React from 'react';
import { Image } from '@mantine/core';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ width = 400, height = 300 }) => (
  <Image
    src={`https://via.placeholder.com/${width}x${height}`}
    alt="Placeholder Image"
    width={width}
    height={height}
    style={{ objectFit: 'cover' }}
  />
);

export default PlaceholderImage;
