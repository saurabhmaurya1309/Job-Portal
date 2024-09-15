
import DataURIParser from 'datauri/parser.js';
import path from 'path';

const getDataUri = (file) => {
    const parser = new DataURIParser();
    const extName = path.extname(file.originalname).slice(1); // Extract file extension without leading '.'
    return parser.format(extName, file.buffer).content; // Return the full Data URI string
};

export default getDataUri;
