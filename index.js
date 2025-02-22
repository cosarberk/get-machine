#!/usr/bin/env node

import { Command } from 'commander';
import pkg from 'node-machine-id';
import si from 'systeminformation';
import chalk from 'chalk';

const { machineIdSync } = pkg;

const program = new Command();

program
  .name('getm')
  .description('A powerful CLI tool to fetch machine and system information.')
  .version('1.0.0');

program
  .option('-m, --machine-id', 'Show the machine ID')
  .option('-c, --cpu-info', 'Show CPU details')
  .option('-r, --memory-info', 'Show memory usage')
  .option('-d, --disk-info', 'Show disk information')
  .option('-f, --fan-info', 'Show fan speeds')
  .option('-n, --network-info', 'Show network information')
  .action(async (options) => {
    if (options.machineId) {
      const id = machineIdSync();
      console.log(chalk.green(`Machine ID: ${id}`));
    }

    if (options.cpuInfo) {
      const cpu = await si.cpu();
      console.log(chalk.blue(`CPU Model: ${cpu.manufacturer} ${cpu.brand}`));
      console.log(chalk.blue(`Cores: ${cpu.cores}`));
    }

    if (options.memoryInfo) {
      const mem = await si.mem();
      console.log(chalk.magenta(`Total RAM: ${(mem.total / (1024 ** 3)).toFixed(2)} GB`));
      console.log(chalk.magenta(`Available RAM: ${(mem.available / (1024 ** 3)).toFixed(2)} GB`));
    }

    if (options.diskInfo) {
      const disk = await si.diskLayout();
      disk.forEach((d, index) => {
        console.log(chalk.yellow(`Disk ${index + 1}: ${d.name} - ${(d.size / (1024 ** 3)).toFixed(2)} GB`));
      });
    }

    if (options.fanInfo) {
      const fan = await si.fan();
      fan.forEach((f, index) => {
        console.log(chalk.cyan(`Fan ${index + 1} Speed: ${f.rpm} RPM`));
      });
    }

    if (options.networkInfo) {
      const net = await si.networkInterfaces();
      net.forEach((n, index) => {
        console.log(chalk.gray(`Network ${index + 1}: ${n.iface} - MAC: ${n.mac} - IP: ${n.ip4}`));
      });
    }

    if (!Object.values(options).some(Boolean)) {
      console.log(chalk.red('Please provide an option. Example: getm --cpu-info'));
    }
  });

program.parse(process.argv);
