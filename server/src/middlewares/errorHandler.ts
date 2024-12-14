import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = (err?.cause as number) || 500;
  const message = err.message || "An unexpected error occurred.";

  res.status(statusCode).json({ error: message });
};

const openaiErrorStatusHandler = (error: { status: any }) => {
  const options = { cause: error.status };

  switch (error.status) {
    case 400:
      throw new Error(
        "Bad Request: The request was malformed or missing parameters.",
        options
      );
    case 401:
      throw new Error("Unauthorized: Please check your API key.", options);
    case 403:
      throw new Error("Forbidden: Access denied to this resource.", options);
    case 404:
      throw new Error(
        "Not Found: The requested endpoint does not exist.",
        options
      );
    case 422:
      throw new Error(
        "Unprocessable Entity: Unable to process the request.",
        options
      );
    case 429:
      throw new Error(
        "Too Many Requests: You have exceeded the rate limit.",
        options
      );
    default:
      throw new Error(
        "Internal Server Error: OpenAI API encountered an error."
      );
  }
};

export { errorHandler, openaiErrorStatusHandler };
