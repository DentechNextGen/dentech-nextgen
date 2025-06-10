import React from 'react';

interface SplashtopEmbedProps {
  color?: 'blue' | 'green' | 'red';  // Allow for color customization
  platform?: 'mac' | 'windows';      // Allow for platform customization
}

const SplashtopEmbed: React.FC<SplashtopEmbedProps> = ({
  color = 'blue',
  platform = 'mac'
}) => {
  return (
    <iframe
      src={`https://help123.app/sos/packages/embed-button/7224ATXKK7RP?platform=${platform}&color=${color}`}
      style={{
        height: '40px',
        width: '160px',
        border: 'none',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
      title="Splashtop Support Button"
    />
  );
};

export default SplashtopEmbed; 