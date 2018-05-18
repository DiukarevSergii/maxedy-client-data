if (Meteor.isServer) {

    // Publish the entire Collection.  Subscription performed in the router.
    Meteor.publish(clientData, function () {
        return ClientData.find();
    });
}


