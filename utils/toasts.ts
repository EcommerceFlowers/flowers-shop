import { toast } from 'react-toastify';

export const FALLBACK_ERROR_MSG = 'An error occurred, please try again later';
export const ToastTemplate = {
  fail: (mess: string) => toast.error(mess),
  success: (mess: string) => {
    return toast.success(mess);
  },
  unknown: () => toast.error(FALLBACK_ERROR_MSG),
  warn: (mess: string) => toast.warn(mess),
};
