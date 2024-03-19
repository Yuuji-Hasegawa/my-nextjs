import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const srcDir = process.cwd() + "/images";
const pubDir = process.cwd() + "/public/images";
const cacheFile = process.cwd() +  '/public/cache/img-gen-cache.json';

const getAllData = (dirPath) => {
  let result = [];
  const getData = (dirPath) => {
    let items = fs.readdirSync(dirPath);
    items = items.map((itemName) => {
      return path.join(dirPath, itemName);
    });
    items.forEach((itemPath) => {
      result.push(itemPath);
      if (fs.statSync(itemPath).isDirectory()) {
        getData(itemPath);
      }
    });
  };
  getData(dirPath);
  return result;
};
const files = getAllData(srcDir).filter((file) => /\.(png|jpe?g)$/i.test(file));
(async () => {
	let processed = {};

  try {
    const data = await fs.promises.readFile(cacheFile);
    processed = JSON.parse(data);
  } catch (err) {
	}

  await Promise.all(
    files.map(async (item) => {
      let paths = path.parse(item);
      let filename = path.parse(item).name;
			let dir = paths.dir.replace(srcDir, pubDir);

			const cacheKey = path.relative(srcDir, item);

      let shouldProcess = false;

      if (!processed[cacheKey] || processed[cacheKey] !== fs.statSync(item).mtimeMs) {
        shouldProcess = true;
      }

      if (shouldProcess) {
        await sharp(item).webp({ quality: 70 }).toFile(`${dir}/${filename}.webp`);
        await sharp(item).avif({ quality: 70 }).toFile(`${dir}/${filename}.avif`);

        processed[cacheKey] = fs.statSync(item).mtimeMs;
      }
    }),
	);

	await fs.promises.writeFile(cacheFile, JSON.stringify(processed, null, 2), 'utf-8');
})();