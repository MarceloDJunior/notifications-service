import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationData,
} from '@application/entities/notification';

type Override = Partial<NotificationData>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override,
  });
}
