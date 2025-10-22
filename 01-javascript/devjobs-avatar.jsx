// DevJobsAvatar.jsx
import React from './node_modules/react';

function createUrl(service, username) {
  return `https://unavatar.io/${service}/${username}`;
}

export default function DevJobsAvatar({
  service = 'github',
  username = 'midudev',
  size = 40,
}) {
  const url = createUrl(service, username);

  return (
    <img
      src={url}
      alt={`Avatar de ${username}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '9999px',
      }}
      className="avatar"
    />
  );
}