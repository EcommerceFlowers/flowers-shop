import uniqueId from 'lodash/uniqueId';
import { useState } from 'react';

/**
 * Collections of timeoutID for debounceHook
 */
const timeoutIDs: { [key: string]: ReturnType<typeof setTimeout> | null } = {};

/**
 * Make an action that limted calling after threshold time
 */

/**
 * Make an action that have been debounce each given time
 * @param debounceTime Delay after call
 * @param clearWhenCallAgain Renew current timeout if true
 */
const useActionDebounce = (
  debounceTime = 500,
  clearWhenCallAgain = false
): ((_action: () => Promise<void> | void) => void) => {
  /**
   * @type action
   */
  let action: any | null;
  const [id] = useState(uniqueId('debounce_'));

  /**
   * Call current stored action
   */
  const doAction = async (): Promise<void> => {
    if (typeof action === 'function') {
      await action();
    }
    const timeOut = timeoutIDs[id];
    if (timeOut) {
      clearTimeout(timeOut);
      timeoutIDs[id] = null;
    }
    action = null;
  };

  /**
   * On receive action
   * @param _action
   */
  const onAction = (
    _action: () => Promise<void> | void = async (): Promise<void> => undefined
  ): void => {
    action = _action;
    if (clearWhenCallAgain) {
      const timeOut = timeoutIDs[id];
      if (timeOut) {
        clearTimeout(timeOut);
      }
      timeoutIDs[id] = setTimeout(() => doAction(), debounceTime);
    } else if (timeoutIDs[id] === null) {
      timeoutIDs[id] = setTimeout(() => doAction(), debounceTime);
    }
  };
  return onAction;
};

export { useActionDebounce };
