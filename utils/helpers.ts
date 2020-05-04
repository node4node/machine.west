import retry from "retry";

export async function failsafe<T>(
  func: (...data: any[]) => Promise<T>,
  ...args: any[]
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const operation = retry.operation({
      retries: 5,
    });

    operation.attempt(async () => {
      try {
        const result = await func(...args);
        return resolve(result);
      } catch (error) {
        if (operation.retry(error)) {
          return;
        } else return reject(operation.mainError());
      }
    });
  });
}
