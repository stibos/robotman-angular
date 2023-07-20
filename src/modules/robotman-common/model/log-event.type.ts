export type LogEvent = {
  message: string;
  level: 'debug' | 'info' | 'warn' | 'error';
  data?: any;
}
