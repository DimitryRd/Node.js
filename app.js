console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

var title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
var body = {
    describe: "The plot of the note",
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'List all notes')
    .command('read', "Read a note",{
        title: title
    })
    .command('remove', 'Remove a note',{
        title: title
    })
    .help()
    .argv;
var command = argv._[0];
console.log("Command: ", command);
console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note added");
        notes.logNote(note);
    } else {
        console.log("The note already exist")
    }
} else if (command === "list") {
    var allNotes = notes.getAll();
    allNotes.forEach((allNotes) => {
        "use strict";
        notes.logNote(allNotes);
    })
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note){
        notes.logNote(note);
    }else{
        console.log("Note was note find");
    }
    ;
} else if (command === "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
    notes.logNote(noteRemoved);
} else {
    console.log("Command was not recognised");
}