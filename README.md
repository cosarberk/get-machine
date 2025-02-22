
# getm 🔍

**getm** is a powerful and easy-to-use Node.js CLI tool designed to retrieve detailed system information across multiple platforms. Whether you're looking for machine IDs, CPU details, RAM usage, disk stats, or fan speeds, **getm** provides everything you need in one simple command.

---

## 🚀 Features

- 🔑 Retrieve unique **Machine ID**
- ⚡ Get detailed **CPU Information**
- 🧠 Check **RAM Usage** and availability
- 💾 Display **Disk Information**
- 🌬️ Monitor **Fan Speeds**
- 🌐 List active **Network Interfaces**
- 🎯 Cross-platform compatibility (Linux, macOS, Windows)
- 🎨 Colorful and clear output

---

## 📦 Installation

To install **getm** globally via NPM, run:

```bash
npm install -g getm
```

---

## 🔥 Usage

Once installed, you can use `getm` from your terminal with various options:

### Basic Commands

| Command                | Description                          |
|------------------------|--------------------------------------|
| `getm -m, getm --machine-id`    | Shows the unique Machine ID          |
| `getm -c, getm --cpu-info`      | Displays detailed CPU information    |
| `getm -r, getm --memory-info`   | Shows total and available RAM        |
| `getm -d, getm --disk-info`     | Displays disk size and details       |
| `getm -f, getm --fan-info`      | Shows fan speeds (if available)      |
| `getm -n, getm --network-info`  | Lists active network interfaces      |

### Examples

Get the unique machine ID:
```bash
getm --machine-id
```

Display CPU details:
```bash
getm --cpu-info
```

Check available RAM:
```bash
getm --memory-info
```

Show disk information:
```bash
getm --disk-info
```

Monitor fan speeds:
```bash
getm --fan-info
```

List network interfaces:
```bash
getm --network-info
```

---

## 💻 Development

Clone the repository:
```bash
git clone https://github.com/yourusername/getm.git
```

Install dependencies:
```bash
npm install
```

Run locally:
```bash
node index.js --cpu-info
```

Link globally for development:
```bash
npm link
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an [issue](https://github.com/yourusername/getm/issues) or submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- [node-machine-id](https://www.npmjs.com/package/node-machine-id)
- [systeminformation](https://www.npmjs.com/package/systeminformation)
- [commander](https://www.npmjs.com/package/commander)
- [chalk](https://www.npmjs.com/package/chalk)

Happy coding! 🚀

