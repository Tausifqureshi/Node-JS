# 🚀 Node.js Revision & Practical Guide

Welcome to the **Node.js Complete Revision Repository**! This project is structured to help developers learn and revise core Node.js concepts from scratch. It focuses on modern industry standards, clearly comparing legacy approaches with modern ES6+ practices (like Async/Await vs Callbacks).

## 📂 Folder Structure & Topics Covered

Each folder is dedicated to a specific topic and contains:

- `thory.js`: Detailed theoretical concepts and interview-prep notes.
- `practical.js`: Runnable code snippets demonstrating different implementation methods.

| Topic                                | Description                                               |
| :----------------------------------- | :-------------------------------------------------------- |
| 🌐 **Node_Server_Creation**          | Setting up a basic Node.js HTTP server.                   |
| 📦 **NPM_and_PackageJSON**           | Understanding NPM, dependencies, and `package.json`.      |
| 📥 **Require**                       | Explicit usage of `require()` for importing and exporting. |
| 🔄 **Modules_CommonJS_vs_ESM**       | Legacy `require()` vs Modern `import/export`.             |
| 📁 **FS_Module**                     | File System operations using modern Promises.             |
| 🛤️ **Path_Module**                   | Handling file paths across different operating systems.   |
| 📡 **HTTP_Module**                   | Building and routing with the core HTTP module.           |
| 🔐 **Environment_Variables**         | Securing sensitive keys using `dotenv`.                   |
| ⏱️ **Async_Programming**             | Concepts of Blocking vs Non-Blocking execution.           |
| 🔗 **Callbacks_Promises_AsyncAwait** | Evolution of handling async code in Node.js.              |
| 🔁 **Event_Loop**                    | Understanding the core architecture of Node.js execution. |
| ⚠️ **Error_Handling**                | Catching errors gracefully to prevent server crashes.     |
| 🛠️ **Middleware**                    | Intercepting requests (Core concept for Express.js).      |
| 🌐 **Global_Objects_and_Keywords**   | Understanding `require`, `__dirname`, `__filename`, etc.  |
| 📢 **Events_EventEmitter**           | Event-Driven Architecture and custom events.              |
| 🌊 **Streams_and_Buffers**           | Efficiently handling large files without crashing.        |

---

## 📸 Core Practical Examples

Below are a few key snippets demonstrating the modern implementation of core Node.js concepts covered in this repository.

### 1. Creating a Basic Node Server (`Node_Server_Creation`)

_A simple demonstration of creating an HTTP server and handling different routes._

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello! This is our first Node.js Server.");
  } else if (req.url === "/about") {
    res.end("This is the About Page.");
  } else {
    res.writeHead(404);
    res.end("404 - Page Not Found!");
  }
});

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
```

### 2. Modern Async/Await Implementation (`Callbacks_Promises_AsyncAwait`)

_Avoiding callback hell by using modern `async/await` syntax for asynchronous operations._

```javascript
// A Promise-based mock API function
const fetchWithPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id: 2, name: "Promise Data" }), 2000);
  });
};

// Modern Async/Await execution
const getUserAsync = async () => {
  try {
    const data = await fetchWithPromise();
    console.log("Async/Await Output:", data);
  } catch (err) {
    console.log("Error:", err);
  }
};

getUserAsync();
```

### 3. File System with Promises (`FS_Module`)

_Using the modern `fs/promises` module instead of legacy callback-based file operations._

```javascript
const fsNew = require("fs/promises");

const performFileOperations = async () => {
  try {
    await fsNew.writeFile("demoNew.txt", "Data written using Modern FS");
    const data = await fsNew.readFile("demoNew.txt", "utf-8");

    console.log("Data Read:", data);
  } catch (error) {
    console.log("Error:", error.message);
  }
};

performFileOperations();
```

---

_Created with ❤️ for Node.js Revision._
