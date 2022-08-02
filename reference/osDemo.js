const os = require('os');

// platform [windows = win32, mac = darwin, linux =  etc.]
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir());

// uptime - seconds your system has been up
console.log(os.uptime());
