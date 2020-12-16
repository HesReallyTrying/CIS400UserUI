const Status = Object.freeze({
  ERROR: {
    USERNAME_IS_EMPTY_ERROR: 'Please fill out this field.',
    USERNAME_NOT_ALPHANUM_ERROR: 'Username must only contain alphanumeric characters.',
    USER_ALREADY_EXISTS_ERROR: 'Sorry, an account with this username already exists.',
    EMAIL_IS_EMPTY_ERROR: 'Please fill out this field.',
    EMAIL_NOT_PROPER_FORMATE_ERROR: 'Email must be proper format',
    PASSWORD_IS_EMPTY_ERROR: 'Please fill out this field.',
    PASSWORD_LENGTH_ERROR: 'Password length is too short. Must be at least 5 characters.',
    CONFIRM_PASSWORD_ERROR: 'Passwords do not match.',
    USERNAME_NOT_EXIST_ERROR: 'Sorry, we couldn\'t find an account with this username.',
    LOGIN_PASSWORD_ERROR: 'Sorry, that was the wrong password. Please try again.',
    USER_NOT_EXIST_ERROR: 'No user profile yet.',
    ASYNC_STORAGE_SET_ERROR: 'Sorry, there was an error saving your data.',
    ASYNC_STORAGE_GET_ERROR: 'Sorry, there was an error retrieving your data.',
    BUSINESS_PROFILE_NOT_EXISTS_ERROR: 'There is no profile for this business.',
    OTHER_ERROR: 'Oops! Something went wrong.',
  },
  SUCCESS: 'Success.',
});

const UserType = Object.freeze({
  CUSTOMER: 'Customer',
  BUSINESS: 'Business',
});

const Api = Object.freeze({
  DOMAIN: 'http://localhost:8080/v1/api',
});

const HttpStatus = Object.freeze({
  OK: 200,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
});

export {
  Status, UserType, Api, HttpStatus,
};
