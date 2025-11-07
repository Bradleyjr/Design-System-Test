import React from 'react';
import './Avatar.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar image source */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback initials */
  initials?: string;
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Avatar shape */
  shape?: 'circle' | 'square';
  /** Status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  shape = 'circle',
  status,
  className = '',
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);

  const classNames = [
    'ds-avatar',
    `ds-avatar--${size}`,
    `ds-avatar--${shape}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showImage = src && !imageError;
  const showInitials = !showImage && initials;

  return (
    <div className={classNames} {...props}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="ds-avatar__image"
          onError={() => setImageError(true)}
        />
      ) : showInitials ? (
        <span className="ds-avatar__initials">{initials}</span>
      ) : (
        <span className="ds-avatar__fallback">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </span>
      )}
      {status && (
        <span className={`ds-avatar__status ds-avatar__status--${status}`} />
      )}
    </div>
  );
};
