clientData = 'ClientData';

ClientData = new Mongo.Collection(clientData);

ClientData.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.methods({
    /**
     * Invoked by autoform to add a new Client Data record.
     * @param doc The ClientData document.
     */
    addClientData: function (doc) {
        console.log('Adding', doc);
        check(doc, ClientData.simpleSchema());
        ClientData.insert(doc, function (err, docID) {
            console.log('DocID: ', docID);
        });
    },

    /**
     * Invoked by autoform to update a Client Data record.
     * @param doc The ClientData document.
     * @param docID It's ID.
     */
    updateClientData: function (doc, docID) {
        console.log('Updating', doc);
        check(doc, ClientData.simpleSchema());
        ClientData.update({_id: docID}, doc);
        Router.go('EditClientData');
    }
});

/**
 * Create the schema for Client Data.
 */
ClientData.attachSchema(new SimpleSchema({
    name: {
        label: 'Client Name',
        type: String,
        optional: false,
        max: 100,
        autoform: {
            group: clientData,
            placeholder: 'Diukarev Sergii'
        }
    },
    age: {
        label: 'Client Age',
        type: Number,
        optional: true,
        max: 100,
        autoform: {
            group: clientData,
            placeholder: '30'
        }
    },
    bio: {
        label: 'Bio',
        type: String,
        optional: true,
        max: 1000,
        autoform: {
            group: clientData,
            placeholder: 'Short (less than 1000 characters) biographical statement.',
            rows: 5
        }
    },
    languages: {
        label: 'Programming languages',
        type: [String],
        optional: true,
        allowedValues: ['JavaScript', 'Java', 'SQL', 'Groovy'],
        autoform: {
            group: clientData,
            type: 'select-checkbox-inline'
        }
    },
    databases: {
        label: 'Database systems',
        type: String,
        optional: false,
        allowedValues: ['MongoDB', 'Elasticsearch', 'MySQL', 'PostgreSQL', 'Firebase'],
        autoform: {
            group: clientData,
            type: 'select-radio-inline'
        }
    },
    experience: {
        label: 'Professional experience',
        type: Number,
        optional: false,
        allowedValues: [0, 1, 2, 3, 4],
        autoform: {
            group: clientData,
            options: [
                {label: '[  ~  1 years]', value: 0},
                {label: '[1 -  3 years]', value: 1},
                {label: '[3 -  5 years]', value: 2},
                {label: '[5 - 10 years]', value: 3},
                {label: '[  > 10 years]', value: 4}
            ]
        }
    },
    skills: {
        label: 'Personal skills',
        type: [String],
        optional: true,
        allowedValues: ['Communication Skills', 'Honesty', 'Technical Competency', 'Problem-Solving Skills', 'Loyalty'],
        autoform: {
            group: clientData,
            type: 'select-multiple'

        }
    }
}));

