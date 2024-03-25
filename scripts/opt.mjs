import fs from 'fs';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import path from 'path';

const srcDir = process.cwd() + "/images";
const pubDir = process.cwd() + "/public/images";
const cacheFile = process.cwd() +  '/public/cache/img-opt-cache.json';

function getInOut(input, output) {
  let ret = [];
  ret.push({ input, output });
  const dirs = fs.readdirSync(input);
  for (let dir of dirs) {
    let inputNext = path.join(input, dir);
    let outputNext = path.join(output, dir);
    if (fs.statSync(inputNext).isDirectory()) {
      ret.push(...getInOut(inputNext, outputNext));
    }
  }
  return ret;
}
(async () => {
  let processed = {};

  try {
    const data = await fs.promises.readFile(cacheFile);
    processed = JSON.parse(data);
  } catch (err) {
  }

  let dirs = getInOut(srcDir, pubDir);

  await Promise.all(dirs.map(async (item) => {
    const files = fs.readdirSync(item.input);
		for (let file of files) {
			if (file === '.DS_Store') continue;

      const inputFilePath = path.join(item.input, file);
      const cacheKey = path.relative(srcDir, inputFilePath);

      let shouldProcess = false;

      if (!processed[cacheKey] || processed[cacheKey] !== fs.statSync(inputFilePath).mtimeMs) {
        shouldProcess = true;
      }

      if (shouldProcess) {
        const result = await imagemin([inputFilePath], {
          destination: item.output,
          plugins: [
            imageminMozjpeg({ quality: 85, progressive: true }),
            imageminPngquant({ quality: [0.7, 0.85] }),
            imageminGifsicle({ interlaced: false, optimizationLevel: 10, colors: 256 }),
            imageminSvgo({
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
								},
								{
									name: 'removeDimensions',
									active: true
								},
								{
									name: 'convertPathData',
									active: true
								},
              ],
            }),
          ],
        });
        processed[cacheKey] = fs.statSync(inputFilePath).mtimeMs;
      }
    }
  }));

  await fs.promises.writeFile(cacheFile, JSON.stringify(processed, null, 2), 'utf-8');
})();