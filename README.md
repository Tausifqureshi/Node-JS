# 🚀 Node.js Advanced Revision & Practical Guide

Welcome to the **Node.js Complete Revision Repository**! This project is structured to help developers learn and revise core Node.js concepts from scratch up to advanced backend architectures. It focuses on modern industry standards, clearly comparing legacy approaches with modern ES6+ practices.

## 📂 Folder Structure & Topics Covered

Each folder is dedicated to a specific topic and contains:

- `thory.js`: Detailed theoretical concepts, real-life examples, and interview-prep notes.
- `practical_*.js`: Multiple runnable code snippets demonstrating different implementation methods and edge cases.

### Core Concepts

| Topic                              | Description                                             |
| :--------------------------------- | :------------------------------------------------------ |
| 🟢 **Introduction**                | Basics of Node.js, V8 Engine, and execution flow.       |
| 🌐 **Node_Server_Creation**        | Setting up HTTP & modern Express.js servers.            |
| 📦 **NPM_and_PackageJSON**         | Understanding NPM, dependencies, and `package.json`.    |
| 📥 **Require**                     | Explicit usage of `require()` for imports.              |
| 🔄 **Modules_CommonJS_vs_ESM**     | Legacy `require()` vs Modern `import/export`.           |
| 🌐 **Global_Objects_and_Keywords** | `__dirname`, `__filename`, `process`, and `timers`.     |
| 🛤️ **Path_Module**                 | Handling file paths across different operating systems. |
| 📁 **FS_Module**                   | File System operations using modern Promises.           |

### Advanced Concepts & Architecture

| Topic                                | Description                                            |
| :----------------------------------- | :----------------------------------------------------- |
| 📡 **HTTP_Module**                   | Building and routing APIs with the core HTTP module.   |
| 🔐 **Environment_Variables**         | Securing sensitive keys using `.env` and `dotenv`.     |
| ⏱️ **Async_Programming**             | Blocking vs Non-Blocking execution patterns.           |
| 🔗 **Callbacks_Promises_AsyncAwait** | Evolution of handling async code in Node.js.           |
| 🔁 **Event_Loop**                    | Call stack, microtasks, and macrotasks deep dive.      |
| ⚠️ **Error_Handling**                | Sync/Async error catching and uncaught exceptions.     |
| 📢 **Events_EventEmitter**           | Event-Driven Architecture and custom event listeners.  |
| 🌊 **Streams_and_Buffers**           | Efficiently handling large files using streams/pipes.  |
| 🏗️ **Classes_in_Nodejs**             | OOPs concepts: Custom Errors, Services, EventEmitters. |

### Express.js & Production Patterns

| Topic                               | Description                                              |
| :---------------------------------- | :------------------------------------------------------- |
| 🚀 **Express_Routing_and_Requests** | Handling `req.params`, `req.query`, and `req.body`.      |
| 🛠️ **Middleware**                   | Application, Router, and Error-handling middlewares.     |
| 🛡️ **Crypto_and_Security**          | Hashing passwords with built-in `crypto` and `bcrypt`.   |
| 🏛️ **MVC_Architecture**             | Models, Views, Controllers, and Routes folder structure. |

---

## 📸 How to use this repository?

1. Clone the repository.
2. Run `npm install` (to install dependencies like `express` or `bcrypt`).
3. Navigate to any folder (e.g., `cd MVC_Architecture`).
4. Read the `thory.js` file for theoretical understanding.
5. Run the specific practical file (e.g., `node practical_server.js`).

---

_Created with ❤️ for mastering Node.js._
NonBlock -->|Processes immediately| IOPolling[I/O Polling]

    Loop -->|If Heavy Task| Block[Blocking Operations <br> e.g. Database, FS Read]
    Block -->|Send to Background| ThreadPool[Thread Pool / Libuv]
    ThreadPool -->|Worker Threads execute| ExtOp[External Operations]
    ExtOp -->|Callback when done| Loop

```

---

## 📸 How to use this repository?

1. Clone the repository.
2. Run `npm install` (to install dependencies like `express` or `bcrypt`).
3. Navigate to any folder (e.g., `cd MVC_Architecture`).
4. Read the `thory.js` file for theoretical understanding.
5. Run the specific practical file (e.g., `node practical_server.js`).

---
_Created with ❤️ for mastering Node.js._
```
