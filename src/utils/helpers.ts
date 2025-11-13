type ClassValue =
  | string
  | undefined
  | Record<string, boolean | undefined>
  | ClassValue[];

export const clsx = (...args: ClassValue[]): string => {
  const output: string[] = [];

  for (const item of args) {
    if (!item) continue;

    if (typeof item === 'string') {
      output.push(item);
    } else if (Array.isArray(item)) {
      output.push(...clsx(item));
    } else {
      for (const key in item) {
        if (item[key]) {
          output.push(key);
        }
      }
    }
  }

  return output.join(' ');
};
