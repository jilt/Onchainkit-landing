'use client';

import {
  DISCORD_LINK,
  WARPCAST_LINK,
  TELEGRAM_LINK,
  DEXSCREENER_LINK,
  TWITTER_LINK,
  DEV_LINK,
  MEDIA_LINK,
  FOUNDER_LINK,
} from 'src/links';
import ArrowSvg from 'src/svg/ArrowSvg';

const docLinks = [
  { href: DEXSCREENER_LINK, title: 'Dexscreener' },
  { href: TELEGRAM_LINK, title: 'Telegram' },
  { href: DISCORD_LINK, title: 'Discord' },
  { href: WARPCAST_LINK, title: 'Warpcast' },
  { href: TWITTER_LINK, title: 'X' },
];

const teamLinks = [
  { href: DEV_LINK, title: 'Dev' },
  { href: MEDIA_LINK, title: 'Contact' },
  { href: FOUNDER_LINK, title: 'Founder' },
];

export default function Footer() {
  return (
  <>
    <div className="social-container poppins-bold">
      {docLinks.map(({ href, title }) => (
      <div key={href}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          title={title}
          className="flex items-center gap-1"
        >{title}
        </a>
      </div>
  ))}
  </div>

    <h1 className="footer poppins-extrabold">Team</h1>

    <div className="menu-container poppins-extrabold">
   
    {teamLinks.map(({ href, title }) => (
      <div key={href}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          title={title}
          className="flex items-center gap-1 footer-button"
        >{title}
        </a>
      </div>
  ))}

    </div>
    </>
  );
}
