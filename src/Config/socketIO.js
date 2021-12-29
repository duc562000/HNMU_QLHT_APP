import io from 'socket.io-client/dist/socket.io';
import {NetworkSetting} from './Setting';

export const connectSocket = () => {
  const socket = io(NetworkSetting.SOCKETCHAT, {
    jsonp: false,
    // timeout: 10000,
    // // transports: ['websocket'],
    // autoConnect: false,
    agent: '-',
    // path: '/', // Whatever your path is
    pfx: '-',
    // // key: token, // Using token-based auth.
    // // passphrase: cookie, // Using cookie auth.
    reconnection: true,
    'force new connection': true,
    transports: ['websocket', 'polling'],
    cert: '-',
    ca: '-',
    ciphers: '-',
    rejectUnauthorized: '-',
    perMessageDeflate: '-',
  });
  return socket;
};

export const SOCKET_EVENTS = {
  EVENT: 'event',
  CONNECTION: 'connection',
};

export const EVENT_STATUS = {
  UNKNOW: 0,
  ACTIVE: 1,
  INACTIVE: 2,
};

export const ROOMS = {
  COMMENT: 'COMMENT_',
};

export const NAMESPACE = {
  COMMENT: '/comments',
  HOME: '/homes',
  SHARE: '/share',
  REVIEW_DETAIL: '/review_detail',
  COMMENT_REVIEW_DETAIL: '/comment_review_detail',
  PROFILE: '/profile',
  REPLY_COMMENT: '/reply-comments',
  WALLET: '/wallet',
  PRIVATE_CHAT: '/private_chat',
  THREAD_CHAT: '/thread_chat',
};

export const MESSAGE_TYPE = {
  TEXT: 1,
  IMAGE: 2,
  LOCATION: 3,
  ALERT: 4,
};

export const MESSAGE_STATUS = {
  SENT: 1,
  PENDING: 2,
  RECEIVER: 3,
  READ: 4,
};
