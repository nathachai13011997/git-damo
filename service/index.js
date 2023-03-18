function base64ToBase64url(input) {
    // Replace non-url compatible chars with base64url standard chars and remove leading =
    return input
      .replace(/\+/g, '_')
      .replace(/\//g, '-')
      .replace(/=+$/g, '');
  }