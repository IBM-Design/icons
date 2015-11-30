var fileType = ".ai";

// Main Code [Execution of script begins here]
function main (argv) {
    var destFolder = new Folder(argv[1]),
        sourceFolder = new Folder(argv[2]),
        files, openFiles = [],
        sourceDoc;

    if (!destFolder.exists) {
        destFolder.create();
    }

    if ( sourceFolder != null ) {
        files = findSourceFiles(sourceFolder);

        if ( files.length > 0 ) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                sourceDoc = app.open(file);
                openFiles.push(sourceDoc);

                exportPng8(sourceDoc, sourceFolder, destFolder);
                exportSvg(sourceDoc, sourceFolder, destFolder);
            }
        }
        else {
            alert( "No matching files found" );
        }
    }
}

function getDestPath(sourceDoc, sourceFolder, destFolder, ext, suffix) {
    var suffix = suffix || "",
        baseName = sourceDoc.name.replace(fileType, suffix + "." + ext),
        relativePath = ext + "/" + String.prototype.replace.call(
                sourceDoc.path, sourceFolder.absoluteURI, ""),
        outputPath = destFolder + "/" + relativePath,
        outputFolder = new Folder(outputPath);

    if( !outputFolder.exists ) {
        outputFolder.create();
    }

    // Create a file object to save the svg
    return new File(outputPath + "/" + baseName);
}

function findSourceFiles (sourceFolder) {
    var files, folders;

    files = sourceFolder.getFiles("*" + fileType);

    folders = sourceFolder.getFiles(function(found) {
        return found instanceof Folder;
    });

    for (var i = 0; i < folders.length; i++) {
        files = files.concat(findSourceFiles(folders[i]));
    }

    return files;
}


function exportSvg(source, sourceFolder, dest) {
    var exportOpts = new ExportOptionsSVG(),
        targetFile;

    exportOpts.saveMultipleArtboards = true;

    // Call function getNewName to get the name and file to save the SVG
    targetFile = getDestPath(source, sourceFolder, dest, "svg");

    // Save as svg
    source.exportFile(targetFile, ExportType.SVG, exportOpts );
}

function exportPng8(sourceDoc, sourceFolder, dest) {
    var exportOpts = new ExportOptionsPNG8(),
        targetFile;

    exportOpts.artBoardClipping = true;

    for (var i = 0; i < sourceDoc.artboards.length; i++) {
        sourceDoc.artboards.setActiveArtboardIndex(i);
        targetFile = getDestPath(sourceDoc, sourceFolder, dest, "png",
            "_" + sourceDoc.artboards[i].name);

        // Save as png
        sourceDoc.exportFile(targetFile, ExportType.PNG8, exportOpts );
    }

}
