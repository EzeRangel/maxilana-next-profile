export class CustomError extends Error {
  constructor({ message, code, errors }) {
    const error = message ? { message, ...(code ? { code } : {}) } : errors[0];

    super(error.message);
    this.errors = message ? [error] : errors;

    if (error.code) this.code = error.code;
  }
}

// AGREGAR CLASES DE ERROR SI SE NECESITA

export class FetcherError extends CustomError {
  constructor(options) {
    super(options);
    this.status = options.status;
  }
}
