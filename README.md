
# @goelharshit006/api-kit

![npm version](https://img.shields.io/npm/v/@goelharshit006/api-kit)
![npm downloads](https://img.shields.io/npm/dm/@goelharshit006/api-kit)
![license](https://img.shields.io/npm/l/@goelharshit006/api-kit)
![node](https://img.shields.io/node/v/@goelharshit006/api-kit)

Production-ready API utilities and middleware toolkit for Express.js.

---

## Features

- Standardized API responses
- Centralized error handling
- Async route handler wrapper
- Response helper methods
- Production-safe error responses
- Pagination utilities
- Query builder utilities
- Field filtering utility
- Lightweight and dependency-free

---

# Installation

```bash
npm install @goelharshit006/api-kit
````

---

# Quick Start

```js
import express from "express";

import {
  asyncHandler,
  errorHandler,
  responseEnhancer,
  notFoundHandler,
  ApiError,
} from "@goelharshit006/api-kit";

const app = express();

app.use(express.json());

app.use(responseEnhancer);

app.get(
  "/",
  asyncHandler(async (req, res) => {

    return res.success(
      {
        name: "Harshit",
      },
      "API working"
    );

  })
);

app.get(
  "/error",
  asyncHandler(async (req, res) => {

    throw new ApiError(
      404,
      "User not found",
      "USER_NOT_FOUND"
    );

  })
);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# API Reference

---

## ApiError

Create structured API errors.

```js
throw new ApiError(
  404,
  "User not found",
  "USER_NOT_FOUND"
);
```

### Parameters

| Parameter  | Type   | Default               |
| ---------- | ------ | --------------------- |
| statusCode | number | 500                   |
| message    | string | Something went wrong  |
| code       | string | INTERNAL_SERVER_ERROR |
| details    | any    | null                  |

---

## asyncHandler

Wrap async Express controllers.

```js
app.get(
  "/users",
  asyncHandler(async (req, res) => {

    const users = [];

    return res.success(users);

  })
);
```

---

## responseEnhancer

Adds helper methods to the Express response object.

```js
app.use(responseEnhancer);
```

### Available Methods

---

### res.success()

```js
return res.success(
  data,
  "Success message"
);
```

---

### res.fail()

```js
return res.fail(
  "Request failed",
  400,
  "REQUEST_FAILED"
);
```

---

### res.created()

```js
return res.created(
  data,
  "Resource created"
);
```

---

### res.noContent()

```js
return res.noContent();
```

---

## errorHandler

Global error handling middleware.

```js
app.use(errorHandler);
```

### Features

* Handles custom ApiError instances
* Handles unknown errors
* Shows stack traces in development
* Hides sensitive errors in production

---

## notFoundHandler

Handles unknown routes.

```js
app.use(notFoundHandler);
```

---

# Utilities

---

## getPaginationMeta()

Generate pagination metadata.

```js
import {
  getPaginationMeta,
} from "@goelharshit006/api-kit";

const meta = getPaginationMeta({
  page: 1,
  limit: 10,
  totalItems: 95,
});
```

### Example Output

```json
{
  "page": 1,
  "limit": 10,
  "totalItems": 95,
  "totalPages": 10,
  "hasNextPage": true,
  "hasPrevPage": false
}
```

---

## buildQueryOptions()

Parse query parameters safely.

```js
import {
  buildQueryOptions,
} from "@goelharshit006/api-kit";

const options = buildQueryOptions(req.query);
```

### Example Output

```js
{
  page: 1,
  limit: 10,
  skip: 0,
  sort: "-createdAt",
  search: "",
}
```

---

## pickFields()

Filter allowed fields from objects.

```js
import {
  pickFields,
} from "@goelharshit006/api-kit";

const filteredBody = pickFields(
  req.body,
  ["name", "email"]
);
```

---

# Production Ready

* Environment-aware error handling
* Stack traces hidden in production
* Lightweight architecture
* Clean and scalable structure

---

# License

MIT

---

# Author

Harshit

---

# Support

If you like this package, consider giving the repository a star.

```
```
