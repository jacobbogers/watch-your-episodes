import { extname, resolve, normalize } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';

const homePage = "https://web.archive.org/web/20200519225648/https://www.watchepisodeseries1.com/";
const BASE_DIR = "./public/assets";

async function downloadBlob(url: string) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.arrayBuffer();
        return new Uint8Array(data);
    }
    const { status: code, statusText: text } = response;
    throw new Error(`error: ${code}/${text}`)
}

function createFileName(title: string, ext: string): string {
    const base = title.toLowerCase().replace(/[\s:]+/g, '-');
    return `${base}${ext}`;
}

async function saveImageData(fileName: string, data: Uint8Array) {
    await writeFile(normalize(resolve(BASE_DIR, fileName)), data);
}

const htmlResponse = await fetch(homePage);
if (htmlResponse.ok === false) {
    const { status: code, statusText: text } = htmlResponse;
    console.log(`error: ${code}/${text}`);
    process.exit(1);
}

const contentType = htmlResponse.headers.get('content-type');
const size = htmlResponse.headers.get('content-length');
const connection = htmlResponse.headers.get('connection');
const transferEncoding = htmlResponse.headers.get('transfer-encoding');
console.log(`type:${contentType}/[${size}] bytes/${connection}/${transferEncoding}`);

const html = await htmlResponse.text();

const dom = new JSDOM(html, { resources: 'usable' });

const htmlContainer = dom.window.document.querySelector('.container');

if (!htmlContainer) {
    console.error('error: no ".container" class found');
    process.exit(1);
}
const database = {};

const mapUrlToFileName = new Map<string, string>();

let prevKey = '';
for (const child of htmlContainer.children) {
    if (child.className === 'min-border-title') {
        prevKey = '';
        if (child.textContent) {
            prevKey = child.textContent;
            database[prevKey] = [];
        }
    }
    if (child.className === 'featured-ep-list') {
        if (!prevKey) {
            continue;
        }
        const febs = child.querySelectorAll('.featured-ep-box');
        for (const feb of febs.values()) {
            const anchorTitle = feb.querySelector('.feb-details .va a')
            const title = anchorTitle?.textContent;
            const anchorUrl = feb.querySelector('a');
            const backgroundUrl = anchorUrl?.style.backgroundImage;
            const found = backgroundUrl?.match(/^url\("?(?<url>.*?)"?\)/) as unknown as { groups: { url: string } };
            if (found && title) {
                let imageData: Uint8Array | undefined;
                const url = found.groups.url;
                let fileName = mapUrlToFileName.get(url) ?? createFileName(title, extname(url));


                if (!mapUrlToFileName.get(url)) {
                    imageData = await downloadBlob(url);
                }

                //const fileName = createFileName(title, extname(url));
                if (imageData) {
                    await saveImageData(fileName, imageData);
                    mapUrlToFileName.set(url, fileName);
                }
                // the database has a primary entry under "global" property mapping "filename"(id) -> human readable title
                // there are also per data partitions (containing list of filename (ids))
                database[prevKey].push({ fileName, title });
            }
        }
    }
}



console.log(JSON.stringify(database, null, 4));
