declare module 'react-notifications' {
  import { ReactNode } from 'react';
  import { EventEmitter } from 'events';

  enum NotificationType {
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
  }

  enum EventType {
    CHANGE = 'change',
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
  }

  interface NotificationProps {
    type: NotificationType;
    title?: ReactNode;
    message: ReactNode;
    timeOut?: number;
    onClick: () => void;
    onRequestHide: () => void;
  }

  interface NotificationsProps {
    notifications: Notification[];
    onRequestHide?: (notification: Notification) => void;
    enterTimeout?: number;
    leaveTimeout?: number;
  }

  interface NotificationContainerProps {
    enterTimeout?: number;
    leaveTimeout?: number;
  }

  interface INotificationManagerCreate {
    type: EventType;
    title?: NotificationProps['title'];
    message?: NotificationProps['message'];
    timeout?: number;
    onClick?: () => void;
    priority?: boolean;
  }

  class Notification extends React.Component<NotificationProps, Record<string, string>> {}

  class Notifications extends React.Component<NotificationsProps, Record<string, string>> {}

  class NotificationContainer extends React.Component<NotificationContainerProps, Record<string, string>> {}

  class NotificationManager extends EventEmitter {
    static create(INotificationManagerCreate): void;
    static info(
      message?: INotificationManagerCreate['message'],
      title?: INotificationManagerCreate['title'],
      timeOut?: INotificationManagerCreate['timeout'],
      onClick?: INotificationManagerCreate['onClick'],
      priority?: INotificationManagerCreate['priority']
    ): void;
    static success(
      message?: INotificationManagerCreate['message'],
      title?: INotificationManagerCreate['title'],
      timeOut?: INotificationManagerCreate['timeout'],
      onClick?: INotificationManagerCreate['onClick'],
      priority?: INotificationManagerCreate['priority']
    ): void;
    static warning(
      message?: INotificationManagerCreate['message'],
      title?: INotificationManagerCreate['title'],
      timeOut?: INotificationManagerCreate['timeout'],
      onClick?: INotificationManagerCreate['onClick'],
      priority?: INotificationManagerCreate['priority']
    ): void;
    static error(
      message?: INotificationManagerCreate['message'],
      title?: INotificationManagerCreate['title'],
      timeOut?: INotificationManagerCreate['timeout'],
      onClick?: INotificationManagerCreate['onClick'],
      priority?: INotificationManagerCreate['priority']
    ): void;
    static remove(notification: Notification): void;
  }
}
