"use strict";
console.log('Starting notes.js');

const fs = require('fs');


var fetchNotes = () => {

    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return []
    }
};
var saveNotes = (notes) => {

    "use strict";
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    try {
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e) {
        console.log(e.name);
    }
    var dublicatedNotes = notes.filter(note => note.title === title);
    if (dublicatedNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        return note;
    }
};

var getAll = () => {

    let listAllNotes = fetchNotes();
    for (let i = 0; i < listAllNotes.length; i++) {
        console.log(`${listAllNotes[i].title}: ${listAllNotes[i].body}`)
    }

    return listAllNotes
};
var getNote = (title) => {
    console.log("Getting note", title);
    var listAllNotes = fetchNotes();
    var filteredList = listAllNotes.filter(listAllNotes => listAllNotes.title === title);
    return filteredList[0];

};
var removeNote = (title) => {
    var allNotes = fetchNotes();
    var filteredNotes = allNotes.filter((allNotes) => allNotes.title !== title);
    saveNotes(filteredNotes);
    return allNotes.length !== filteredNotes.length
};

var logNote = (note) =>{
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
