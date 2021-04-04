const verbs = ['love', 'dream', 'beliebe'];
const things = ['him', 'her', 'it', 'mine', 'you'];
const persons = {
    '1nd':{
        persons: ['I', 'We'],
        verbs,
        things
    },
    '2nd':{
        persons: ['You'],
        verbs: verbs.map(verb => 'have to ' + verb),
        things
    }, 
    '3nd':{
        persons: ['He', 'She', 'It'],
        verbs: Math.floor(Math.random() * 2) === 0 ? verbs.map(verb => 'has to ' + verb) : verbs.map(verb => verb + 's'),
        things
    }
};
const person = persons[Object.keys(persons)[Math.floor(Math.random()*3)]];
const subject = person.persons[Math.floor(Math.random() * person.persons.length)];
const verb = person.verbs[Math.floor(Math.random() * verbs.length)];
const thing = person.things[Math.floor(Math.random() * things.length)]


console.log(subject, verb, thing)