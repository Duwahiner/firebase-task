
const admin = require('firebase-admin');
const credentialAdmin = require('../to-admin/clave-task-firebase-adminsdk.json');

    function initAdmin ( ) {
        admin.initializeApp( { 
            credential: admin.credential.cert( credentialAdmin )
        } )
    }

    async function read ( ) {
        let task = [],   ref;
        const db = admin.firestore();
            ref = await db.collection( 'task' ).orderBy( 'taskClient', 'desc' ).get();
                ref.forEach( ( doc ) =>  task.push( { _id: doc.id, task: doc.data().taskClient } ) );
            return task;
    }

    async function adds ( value ) {
        let task = [],  ref;
        const db = admin.firestore();
                   await db.collection( 'task' ).doc().set( { taskClient: value } );
             ref = await db.collection( 'task' ).orderBy( 'taskClient', 'desc' ).get();
                   ref.forEach( ( doc ) => task.push( { _id: doc.id, task: doc.data().taskClient } ) );
             return task;
    }

    async function update ( target ) {
        let task = [],  ref;
        const db = admin.firestore();
                   await db.collection( 'task' ).doc( target._id ).update( { taskClient: target.task } );
             ref = await db.collection( 'task' ).orderBy( 'taskClient', 'desc' ).get();
                   ref.forEach( ( doc ) => task.push( { _id: doc.id, task: doc.data().taskClient } ) );
             return task;
    }

    async function remove ( target ) {
        let task = [],  ref;
        const db = admin.firestore();
                   await db.collection( 'task' ).doc( target._id ).delete();
             ref = await db.collection( 'task' ).orderBy( 'taskClient', 'desc' ).get();
                   ref.forEach( ( doc ) => task.push( { _id: doc.id, task: doc.data().taskClient } ) );
             return task;
    }

    module.exports = { initAdmin, read, adds, update, remove }