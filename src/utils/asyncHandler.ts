type AsyncFunction<T> = () => Promise<T>;
export async function withErrorHandler<T>(
  operation: AsyncFunction<T>,
  errorMessage: string
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    Logger.error(errorMessage, error as Error);
    throw error;
  }
}
