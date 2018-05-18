// On server startup, if the database is empty, create some initial data.
if (Meteor.isServer) {
    Meteor.startup(() => {
        /**
         * A list of sample client to pre-fill the Collection.
         * @type {*[]}
         */
        const clientdata = [
            {
                name: 'Diukarev Sergii',
                age: 30,
                bio: 'Be at work on time, do what you were hired to do, meet targets and deadlines and work to the best of your ability. What more could an employer ask?',
                languages: ['JavaScript', 'Java', 'SQL', 'Groovy'],
                databases: 'MongoDB',
                experience: 2,
                skills: ['Problem-Solving Skills']
            },
            {
                name: 'Elon Musk',
                age: 46,
                bio: 'Born in Pretoria, Musk taught himself computer programming at the age of 12. He moved to Canada when he was 17 to attend Queen\'s University. He transferred to the University of Pennsylvania two years later, where he received an economics degree from the Wharton School and a degree in physics from the College of Arts and Sciences. He began a PhD in applied physics and material sciences at Stanford University in 1995, but dropped out after two days to pursue an entrepreneurial career.',
                languages: ['JavaScript'],
                databases: 'MongoDB',
                experience: 3,
                skills: ['Honesty']
            },
            {
                name: 'Stephen King',
                age: 30,
                bio: '\n' +
                'Stephen King at the Harvard Book Store, June 6, 2005\n' +
                'In 2000, King published online a serialized horror novel, The Plant. At first the public presumed that King had abandoned the project because sales were unsuccessful, but King later stated that he had simply run out of stories.[35] The unfinished epistolary novel is still available from King\'s official site, now free. Also in 2000, he wrote a digital novella, Riding the Bullet, and has said he sees e-books becoming 50% of the market "probably by 2013 and maybe by 2012". But he also warns: "Here\'s the thing—people tire of the new toys quickly."',
                languages: ['JavaScript', 'Java', 'SQL', 'Groovy'],
                databases: 'PostgreSQL',
                experience: 4,
                skills: ['Problem-Solving Skills']
            },
            {
                name: 'Steve Jobs',
                age: 56,
                bio: 'He was born in San Francisco, California, to parents who put him up for adoption at birth. He was raised in the San Francisco Bay Area during the 1960s. He attended Reed College in 1972 before dropping out that same year, and traveled through India in 1974 seeking enlightenment and studying Zen Buddhism. His declassified FBI report states that he used marijuana and LSD while he was in college, and he once told a reporter that taking LSD was "one of the two or three most important things" that he did in his life.',
                languages: ['JavaScript', 'SQL', 'Groovy'],
                databases: 'Elasticsearch',
                experience: 2,
                skills: ['Communication Skills']
            }
        ];


        /**
         * Initialize the ClientData collection.
         */
        console.log('Initialize the ClientData collection');
        ClientData.remove({});
        _.each(clientdata, function (client) {
            ClientData.insert(client);
        });

    });
}