const fs = require('fs');
const path = require('path');

//Creates an object with version numbers as keys (eg 1.0.0) or "latest" with the associated schema as the value
function createSchemaDictionary(schemaDirectoryPath, fileNameMatch){
    const dictionary  = {}
    const resolvedPath = path.resolve(__dirname, schemaDirectoryPath);

    const files = fs.readdirSync(resolvedPath);
    files.forEach( file => {
        const match = file.match(fileNameMatch)
        if(match){
            const schemaVersion = match[1].replace(/-/g,'.')
            const schema = require(path.join(resolvedPath, file));
            dictionary[schemaVersion] = schema;
        }
    });
    
    dictionary['latest'] = getLatestVersion(dictionary);
    return dictionary;
}

//Given a schema dictionary it will return the schema with the highest version number
function getLatestVersion(schemas){
    let latestVersion = undefined;
    for (const version in schemas) {
        const latest = latestVersion? latestVersion.match(/(\d+).(\d+).(\d+)/): undefined;
        const current = version.match(/(\d+).(\d+).(\d+)/);
        //update if there is no latest version defined or the major, minor and patch versions are >=
        if(!latestVersion || (current[1]>=latest[1] && current[2]>=latest[2] && current[3]>latest[3])){
                latestVersion = version;
        }
    }
    return latestVersion? schemas[latestVersion] : undefined;
}

exports.Schemas = createSchemaDictionary('./dist', /wallet-(\d+-\d+-\d+)/);