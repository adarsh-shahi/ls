#!/usr/bin/env node

import fs from "fs";
// process module is automatically added to global scope
fs.readdir(process.cwd(), (err, files) => {
	if (err) throw new Error(err);
	console.log(files);
});
