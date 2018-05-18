if (Meteor.isClient) {
    Template.Download.events({
        'click .download': function () {
            var data = ClientData.find({}).fetch();
            var csv = Papa.unparse(data);
            var blob = new Blob([csv],  {type: "text/csv;charset=utf-8"});
            saveAs(blob, "ClientDataCollection.csv");
        }
    });


    Template.AddClientData.helpers({
        /**
         * Get ClientData collection.
         */
        clientdata: function () {
            return ClientData.find();
        }
    });

    /**
     * Configure table settings
     */
    Template.AddClientData.tableSettings = function () {
        return {
            rowsPerPage: 3,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                {key: '_id', label: 'DocId'},
                {key: 'name', label: 'Client Name'},
                {key: 'age', label: 'Client Age'},
                {key: 'bio', label: 'Bio'},
                {key: 'languages', label: 'Programming languages'},
                {key: 'databases', label: 'Database systems'},
                {
                    key: 'experience', label: 'Professional experience',
                    fn: function (value) {
                        switch (value) {
                            case 0: return '[  ~  1 years]';
                            case 1: return '[1 -  3 years]';
                            case 2: return '[3 -  5 years]';
                            case 3: return '[5 - 10 years]';
                            case 4: return '[  > 10 years]';
                        }
                    }
                },
                {key: 'skills', label: 'Personal skills'}
            ],
            useFontAwesome: true,
            group: clientData
        };
    };

    Template.EditClientData.helpers({
        /**
         * Get ClientData collection.
         */
        clientdata: function () {
            return ClientData.find();
        }
    });

    Template.EditClientData.events({
        'click .reactive-table tbody tr': function (event) {
            var objToDelete = this;
            // checks if the actual clicked element has the class `deletebtn `
            console.log('delete');
            console.log(event.target);
            if (event.target.className === "deletebtn") {
                console.log('event');
                event.preventDefault();
                ClientData.remove(objToDelete._id);
            }
        }
    });

    Template.EditClientData.tableSettings = function () {
        return {
            rowsPerPage: 3,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                {key: 'name', label: 'Client Name'},
                {key: 'age', label: 'Client Age'},
                {key: 'bio', label: 'Bio'},
                {key: 'languages', label: 'Programming languages'},
                {key: 'databases', label: 'Database systems'},
                {key: 'experience', label: 'Professional experience'},
                {key: 'skills', label: 'Personal skills'},
                {
                    key: '_id', label: 'Update client',
                    fn: function (value) {
                        var url = '<a style="color: white" href=/client/' + value + '>Update</a>';
                        var html = '<button type="button" class="btn btn-primary">' + url + '</button>';
                        return new Spacebars.SafeString(html);
                    }
                },
                {
                    key: '_id', label: 'Delete client',
                    fn: function () {
                        var url = '<a class="deletebtn" style="color: white">Delete</a>';
                        var html = '<button type="button" class="btn btn-danger">' + url + '</button>';
                        return new Spacebars.SafeString(html);
                    }
                }
            ],
            useFontAwesome: true,
            group: clientData
        };
    };
}