const fs = require('fs').promises;

const remove = async (cmd) => {
  try {
    await fs.unlink(cmd.fileOut);
  } catch (err) {
    console.error(err);
  }
};
const copy = async (cmd) => {
  try {
    const data = await fs.readFile(cmd.fileIn);
    await fs.writeFile(cmd.fileOut, `\n${data}\n`);
  } catch (error) {
    console.log(error);
  }
};
const append = async (cmd) => {
  try {
    const data = await fs.readFile(cmd.fileIn);
    await fs.appendFile(cmd.fileOut, `### ${cmd.fileIn} ${cmd.mark}${data}${cmd.mark}`);
  } catch (error) {
    console.log(error);
  }
};
const readme = async () => {
  await remove({ fileOut: 'fileout.txt' });
  // await copy({ fileIn: 'filein.txt', fileOut: 'fileout.txt' });
  await append({ fileIn: 'filein.txt', fileOut: 'fileout.txt', mark: '\n```\n' });
};

module.exports = {
  copy,
  append,
  remove,
};
